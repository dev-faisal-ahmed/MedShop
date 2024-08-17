import { ErrorRequestHandler } from 'express';
import { sendErrorResponse } from '../helpers';
import { NODE_ENV } from '../config';

export const globalErrorHandler: ErrorRequestHandler = (err, _, res, __) => {
  let status: number = err.status || 500;
  let message: string = err.message || 'something went wrong';

  // handling zod error
  if (err.name === 'ZodError') {
    message = err.issues.reduce(
      (
        msg: string,
        issue: { message: string; path: any[]; received: string },
        index: number
      ) => {
        msg +=
          issue.received === 'undefined'
            ? issue.message
            : `In ${issue.path[0]} ${issue.message}`;
        msg += index !== err.issues.length - 1 ? ' || ' : '';
        return msg;
      },
      ''
    );
  }

  // handling error for mongoose
  // duplicate key
  if (err.errorResponse?.code === 11000) {
    const { errorResponse } = err;
    const [key] = Object.keys(errorResponse.keyPattern);
    message = `${key} : ${errorResponse.keyValue[key]} already exist`;
    status = 400;
  }

  return sendErrorResponse(res, {
    message,
    status,
    error: NODE_ENV === 'development' ? err : {},
  });
};
