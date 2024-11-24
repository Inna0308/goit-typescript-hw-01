function merge<T extends object, B extends object>(objA: T, objB: B): any {
  return Object.assign(objA, objB);
}
