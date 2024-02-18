export const ErrorHandler = class error extends Error {
  statusCode;
  constructor(statusCode, message) {
    super(message);

    this.message = message;
    this.statusCode = statusCode;
  }

  
};
