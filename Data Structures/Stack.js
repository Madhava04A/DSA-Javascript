class Stack {
  constructor(...elems) {
    this.list = [...elems];
  }
  enstack(element) {
    this.list.push(element);
  }
  destack() {
    return this.list.pop();
  }
  isEmpty() {
    return this.list.length === 0;
  }
  size() {
    return this.list.length;
  }
  peek() {
    if (!this.list.isEmpty()) {
      return this.list[this.list.length - 1];
    }
    return null;
  }
  print() {
    console.log(this.list);
  }
}

const items = new Stack();

items.destack();
console.log(items.peek());
items.print();
