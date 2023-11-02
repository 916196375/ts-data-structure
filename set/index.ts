interface SetItem extends Object { }

class Setstructure {
  items: SetItem
  constructor() {
    this.items = {}
  }

  add(item: any) {
    if (this.has(item)) return false
    this.items[item as keyof Object] = item
    return true
  }

  has(item: any) {
    return Reflect.has(this.items, item)
  }



}