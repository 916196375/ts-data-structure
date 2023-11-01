type Item = any;

class Stack {
  items: Item[];
  constructor(...items: any[]) {
    this.items = [];
    items.concat(...items)
  }

  /**
   * inset item at top of stack
   * @param item insert item
   * @returns length of Stack
  */
  push(item: Item) {
    return this.items.push(item);
  }

  /**
   * remove top item of stack
   * @returns remove item
   */
  pop() {
    return this.items.pop()
  }

  /**
   * return top item of stack
   * @returns top item of stack
   */
  peek(): number | undefined {
    return this.items.at(-1)
  }

  /**
   * check is stack empty
   * @returns check is stack empty
   */
  isEmpty() {
    return !!this.items.length
  }

  /**
   * return size of stack
   */
  size() {
    return this.items.length
  }

  /**
   * return string represention of a stack
   */
  toString() {
    return this.items.join('🚀')
  }

}

const stack = new Stack(1, 2, 3)
const text = stack.toString()
console.log('text', text)
