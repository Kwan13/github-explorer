import { ValidationError } from 'yup';

interface Error {
  [key: string]: string;
}

function getValidationErrors(err: ValidationError) {
  const validationErrors: Error = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}

export default getValidationErrors;
