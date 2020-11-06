'use strict';

class Iterable {
  constructor (x) {
    this.count = x;
  }
  [Symbol.iterator] (count = this.count) {
    return {
      next() {
        const value = Math.floor(Math.random()*100)/50;
        if(count--) {
          return {value, done: false};
        } else {
          return {value, done: true};
        }
      }
    };
  }
  
}

const it = new Iterable (3);
console.log([... it]);
