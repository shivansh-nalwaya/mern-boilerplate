import { extendObservable } from "mobx";
class Counter {
  constructor() {
    extendObservable(this, {
      count: 0,
      isOdd: () => this.count % 2 === 1
    });
  }
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}

export default Counter;
