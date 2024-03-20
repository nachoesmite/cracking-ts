class CustomError extends Error {
  constructor(message: string, name: string = 'CUSTOM_ERROR') {
    super(message); // Pass the message to the Error constructor
    this.name = name; // Set the name of the error
  }
}

export class EmptyStackException extends CustomError {
  constructor() {
    super('Stack is empty', 'EMPTY_STACK_EXCEPTION');
  }
}

export class NoSuchElementException extends CustomError {
  constructor() {
    super('Queue is empty', 'NO_SUCH_ELEMENT_EXCEPTION');
  }
}
