"use strict";
module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.eleCount()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    this.input=input.sort(function (a,b) {
       return a-b;
    });
    this.length=this.input.length;
  }

  minimum() {
    // Write your code here
    return this.input[0];
  }

  maximum() {
    // Write your code here
    return this.input[this.length-1];
  }

  eleCount() {
    return this.length;
  }

  average() {
    var sum=this.input.reduce(function (prev,cur) {
       return prev+cur;
    });
    return (sum/this.length).toFixed(2);
  }
  // Write your code here
}
