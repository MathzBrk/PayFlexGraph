export class EmailAlreadyExistsError extends Error {
  constructor() {
    super("User already exists with this email!");
  }
}