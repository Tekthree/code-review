"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(3);
// const d = new Node(4);
// const e = new Node(5);
// const f = new Node(6);
// const g = new Node(7);
// const h = new Node(8);
// const i = new Node(9)

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
// const i = new Node("i");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.right = g;
// f.right = h;
// g.right = i;

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.right = g;
f.right = h;
// g.right = i;

//          1a
//         /\
//        2b  3c
//        /\   \
//      4d 5e   6f
//          \     \
//           8g    7h
//            



let deepestLevelSofar = -1;
let result = null;


function findDeepest(root, level) {

  if (root != null) {
    findDeepest(root.left, level++);

    if (level > deepestLevelSofar) {
      result = root;
      deepestLevelSofar = level;
    }

    findDeepest(root.right, level);
  }

  return result;
}

// console.log(JSON.stringify(a));
console.log(findDeepest(a, 0));
