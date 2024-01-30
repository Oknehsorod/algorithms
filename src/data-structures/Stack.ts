export class Stack<T> {
  private list: T[] = [];

  constructor(list: T[] = []) {
    this.list = list;
  }

  public push(element: T) {
    this.list.push(element);
  }

  public pop(): T {
    return this.list.pop() as T;
  }

  public peek(): T {
    return this.list.at(-1) as T;
  }

  public isEmpty(): boolean {
    return this.list.length === 0;
  }
}
