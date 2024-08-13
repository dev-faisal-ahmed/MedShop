import { FieldErrors } from 'react-hook-form';

export const errorFormatter = (errors: FieldErrors) => {
  return Object.values(errors).reduce((allError: string[], error) => {
    if (error?.message) allError.push(error.message as string);
    return allError;
  }, []);
};
