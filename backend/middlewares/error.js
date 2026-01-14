class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  let error = err;

  error.message = error.message || "Internal Server Error";
  error.statusCode = error.statusCode || 500;

  // Wrong MongoDB ID error
  if (error.name === "CastError") {
    const message = `Resource not found. Invalid: ${error.path}`;
    error = new ErrorHandler(message, 400);
  }

  // Mongoose validation error
  if (error.name === "ValidationError") {
    const validationErrors = Object.values(error.errors).map(
      (item) => item.message
    );
    error = new ErrorHandler(validationErrors.join(", "), 400);
  }

  return res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
};

export default ErrorHandler;
