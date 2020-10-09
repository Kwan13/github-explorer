class AppError {
  private readonly statusCode;

  private readonly message;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
