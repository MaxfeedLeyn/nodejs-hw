import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  return createHttpError(500, err.message);
};
