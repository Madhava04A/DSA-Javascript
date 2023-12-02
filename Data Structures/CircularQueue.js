class CircularQueue {
  constructor(capacity) {
    this.list = new Array(capacity);
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
    this.currentLength = 0;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  size() {
    return this.currentLength;
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.currentLength += 1;
      this.list[this.rear] = element;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.list[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return item;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.list[this.front];
    }
  }
  print() {
    if (this.isEmpty()) {
      return null;
    } else {
      let str = "";
      for (let i = this.front; i <= this.rear; i++) {
        str += this.list[i] + " ";
      }
      console.log(str);
    }
  }
}

const que = new CircularQueue(5);
que.enqueue(10);
que.enqueue(20);
que.enqueue(30);
que.enqueue(40);
que.enqueue(50);
que.enqueue(50);
que.dequeue();
console.log(que.isFull());
console.log(que.peek());
que.print();
