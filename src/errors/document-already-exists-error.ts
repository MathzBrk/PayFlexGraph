export class DocumentExistsError extends Error {
  constructor() {
    super("User already exists with this document!");
  }
}