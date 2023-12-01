class Queue {
  constructor() {
    this.list = [];
  }
  enqueue(element) {
    this.list.push(element);
  }
  dequeue() {
    return this.list.shift();
  }
  isEmpty() {
    return this.list.length === 0;
  }
  size() {
    return this.list.length;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.list[0];
    }
    return null;
  }
  print() {
    console.log(this.list.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(1);
queue.enqueue("ok");

queue.dequeue();
console.log(queue.size());

//////      Optimized Implementation        ///////

class Que {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  size() {
    return this.rear - this.front;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }
  print() {
    console.log(this.items);
  }
}

const list = new Que();

list.enqueue("ok");
list.enqueue(4);
list.dequeue();
console.log(list.print());
