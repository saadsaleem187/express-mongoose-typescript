export default class HttpException extends Error {
  status?: number;
  message: string;
  error: string | null;

  constructor(status: number, message: string, error: string | null) {
    super(message);
    this.status = status;
    this.message = message;
    this.error = error;
  }
}
