// Функція, яка приймає рядок і нічого не повертає
function showMessage(message: string): void {
  console.log(message);
}

// Функція, яка приймає два числа і повертає число
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функція, яка нічого не приймає, але завжди генерує помилку
function customError(): never {
  throw new Error("Error");
}
