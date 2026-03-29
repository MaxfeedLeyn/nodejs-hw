import createHttpError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (createHttpError.isHttpError(err)) {
    return res.status(err.status ?? 500).json({
      message: err.message ?? 'Server error',
    });
  }

  return res.status(500).json({
    message: err?.message ?? 'Internal Server Error',
  });
};
