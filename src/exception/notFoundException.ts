export class NotFoundException extends Error {
  public httpCode: number;
  public httpError: string;

  constructor(message: string, httpError = '', httpCode = 0) {
    super(message);
    this.httpCode = httpCode;
    this.httpError = httpError;
  }
}
