export class Stack {
  private items: Array<string> = []
  push(item: string) {
    this.items.push(item)
  }
  isEmpty() {
    return this.items.length === 0
  }
  peek() {
    return this.items[this.items.length - 1]
  }
}
