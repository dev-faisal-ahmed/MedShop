import { z } from 'zod';
import { isValidDate } from './general.helper';

export const enumGenerator = (options: string[], message: string) => {
  return z.enum([...(options as [string, ...string[]])], {
    required_error: message,
  });
};

export const dateGenerator = (required_error: string) => {
  return z
    .string({ required_error })
    .refine((date) => isValidDate(date), { message: 'Invalid Date' });
};
