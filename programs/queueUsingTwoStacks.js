/*
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
*/

var MyQueue = function() {
    this.s1 = []
    this.s2 = []
};

MyQueue.prototype.push = function(x) {
    this.s1.push(x)
};

MyQueue.prototype.pop = function() {
    if (this.s2.length === 0) {
        while(this.s1.length > 0) {
            this.s2.push(this.s1.pop())
        }
    }
    return this.s2.pop()
};

MyQueue.prototype.peek = function() {
     if (this.s2.length === 0) {
        while(this.s1.length > 0) {
            this.s2.push(this.s1.pop())
        }
    }
    return this.s2[this.s2.length - 1]
};

MyQueue.prototype.empty = function() {
    return Math.max(this.s1.length, this.s2.length) === 0
};


  var obj = new MyQueue()
  obj.push(1)
  obj.push(2)
  obj.push(3)
  obj.push(4)
  var param_2 = obj.pop()
  var param_3 = obj.peek()
  var param_4 = obj.empty()

  console.log(param_2, param_3, param_4)
