class LinkedArrayItem {
  nextNode: LinkedArrayItem | null
  value: unknown
  constructor(value: unknown) {
    this.value = value;
    this.nextNode = null
  }
}

class LinkedArray {
  items: LinkedArrayItem | null
  length: number
  constructor() {
    this.items = null
    this.length = 0
  }

  private findItemByIndex(index: number) {
    let currentIndex = 0
    let currentItem = this.items
    while (currentIndex < index) {
      if (!currentItem) return undefined;
      currentItem = currentItem.nextNode
      currentIndex += 1
    }
    return currentItem
  }

  private isQueryIndexSafe(index: number) {
    return 0 <= index && index <= this.length
  }

  append(value: unknown) {
    const insertItem = new LinkedArrayItem(value)
    if (!this.length) {
      this.items = insertItem
    } else {
      const lastItem = this.findItemByIndex(this.length - 1)!
      lastItem.nextNode = insertItem
    }

    this.length += 1
    return this.length
  }

  insertAt(index: number, item: unknown) {
    const insertItem = new LinkedArrayItem(item)
    const isInsertSafeIndex = this.isQueryIndexSafe(index)
    if (!isInsertSafeIndex) throw new Error("Out of linked length!");

    if (index === 0) {
      insertItem.nextNode = this.items
      this.items = insertItem
    } else {
      if (index < this.length - 1) {
        const targetIndexItem = this.findItemByIndex(index)!
        insertItem.nextNode = targetIndexItem.nextNode
        targetIndexItem.nextNode = insertItem
      } else {
        const lastIndexItem = this.findItemByIndex(this.length - 1)!
        lastIndexItem.nextNode = insertItem
      }
    }
    this.length += 1
  }

  at(index: number) {
    const findItem = this.findItemByIndex(index)
    return findItem?.value;
  }

  indexOf(value: unknown) {
    let countIndex = 0
    let currentItem = this.items
    if (!currentItem) return -1;
    while (currentItem) {
      if (currentItem.value === value) return countIndex;
      currentItem = currentItem?.nextNode
      countIndex += 1
    }
    return -1
  }

  update(index: number, value: unknown) {
    const isSafeIndex = this.isQueryIndexSafe(index)
    if (!isSafeIndex) throw new Error("Out of linked")
    const targetItem = this.findItemByIndex(index)!
    targetItem.value = value
    return true
  }

  removeAt(index: number) {
    const isSafeIndex = this.isQueryIndexSafe(index)
    if (!isSafeIndex) throw false
    if (!this.items) return false
    if (index === 0) {
      this.items = this.items.nextNode
    } else {
      const parentItem = this.findItemByIndex(index - 1)!
      const targetItem = parentItem.nextNode!
      parentItem.nextNode = targetItem.nextNode
    }
  }

  isEmpty() {
    return !!this.length
  }

  size() {
    return this.length
  }

  string() {
    let curerntItem = this.items
    let string = ''
    while (curerntItem) {
      string += `${curerntItem.value}🚀`
      curerntItem = curerntItem.nextNode
    }
    return string
  }

}

const linkedArray = new LinkedArray()
console.log('linkedArray.append(1)', linkedArray.append(1))
console.log('linkedArray.append(1)', linkedArray.append(2))
console.log('linkedArray.append(1)', linkedArray.append(3))
console.log('linkedArray.append(1)', linkedArray.append(4))
console.log('linkedArray.at(2)', linkedArray.at(2))
console.log('linkedArray.indexOf(3)', linkedArray.indexOf(3))
linkedArray.update(2,999)
linkedArray.removeAt(1)
console.log('LinkedArray.toString()', linkedArray.string())