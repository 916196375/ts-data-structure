type Item = any;

class Stack {
  items: Item[];
  length: number
  constructor() {
    this.items = [];
    this.length = 0
  }

  /**
   * inset item at top of stack
   * @param item insert item
   * @returns length of Stack
  */
  push(item: Item) {
    this.length += 1
    return this.items.push(item);
  }

  /**
   * remove top item of stack
   * @returns remove item
   */
  pop() {
    if (this.length) this.length -= 1;
    return this.items.pop()
  }

  peek() {
    return this.items.at(-1)
  }

}