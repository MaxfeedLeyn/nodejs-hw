import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  throw createHttpError(500, err.message);
};
