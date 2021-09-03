"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(22);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


        //     1
        //     /\
        //    2  3
        //   /\   \
        //  4 5    6


// // ----------------------traversal and print --------------------
// const depthFirstPrint = (root) => {
//   const stack = [ root ];

//   while (stack.length > 0){
//     const curr = stack.pop();
//     console.log(curr.value)

//     if(curr.left !== null){
//       stack.push(curr.left);
//     }

//     if(curr.right !== null){
//       stack.push(curr.right)
//     }

//   }

// };

// // depthFirstPrint(a);

// const breadthFirstPrint = (root) => {
//   const queue = [root];
//   while (queue.length > 0) {
//     const curr = queue.shift();
//     console.log(curr);
//     if (curr.left !== null) {
//       queue.push(curr.left);
//     }
//     if (curr.right !== null) {
//       queue.push(curr.right);
//     }
//   }
// };

// // ----------------------recursive --------------------
// const depthFirstPrint = (root) => {
//   if (root === null) return;

//   console.log(root.value);

//   depthFirstPrint(root.left);
//   depthFirstPrint(root.right);
// };

// //------------------- bf search ------------------

// const bfs = (root, target) => {
//   const queue = [root];

//   while (queue.length > 0) {
//     const curr = queue.shift();

//     if (curr.value === target) {
//       return true;
//     }

//     if (curr.left !== null) {
//       queue.push(curr.left);
//     }
//     if (curr.right !== null) {
//       queue.push(curr.right);
//     }
//   }

//   return false;
// };

// // ----------------------sum --------------------

// const sumTree = (root) => {
//   const stack = [root];
//   let sum = 0

//   while(stack.length > 0){
//     const curr = stack.pop()

//     sum += curr.value;

//     if (curr.right !== null){
//       stack.push(curr.right)
//     }

//     if(curr.left !== null){
//       stack.push(curr.left)
//     }
//   }

//   return sum
// }


// console.log(sumTree(a))




//---------------------------- greatest from root value ------------------------

const bfs = (root) => {
  const queue = [root];
  const rootValue = root.value
  let farthestValue = root.value


  while (queue.length > 0) {
    const curr = queue.shift();

    if (curr.value > rootValue && curr.value > farthestValue) {
      farthestValue = curr.value;
    }

    console.log("rootvalue",rootValue)
    console.log("furvalue",farthestValue)


    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }

  return farthestValue;
};

console.log(bfs(a))


// // ---------------------- sum recursive --------------------
// const sumTree = (root) =>{
//   if(root === null) return 0;
//   return sumTree(root.left) + root.value + sumTree(root.right)
// }

// // -------------------- find min ---------------------
// function findMin(node) {
//   if (node == null) return 2147483647;

//   var res = node.value;
//   var lres = findMin(node.left);
//   var rres = findMin(node.right);

//   if (lres < res) res = lres;
//   if (rres < res) res = rres;
//   return res;
// }

// // ------------------- find max ------------------------
// function findMax(node) {
//   if (node == null) return Number.MIN_VALUE;

//   let res = node.value;
//   let lres = findMax(node.left);
//   let rres = findMax(node.right);

//   if (lres > res) res = lres;
//   if (rres > res) res = rres;
//   return res;
// }

// // ------------------ reverse tree ------------------

// function invertTree(head) {
//   if (head) {
//     var temp = head.left;
//     head.left = head.right;
//     head.right = temp;

//     invertTree(head.left);
//     invertTree(head.right);
//   }

//   return head;
// }




// -------------------------------- find path weight equal to pathweight give -------------------------------
// function findLeaf(root, pathWeight) {
//   let stack = [];

//   stack.push([root, 0]);

//   while (stack.length) {
//     let [currentNode, sumSoFar] = stack.pop();

    
//     console.log(JSON.stringify(sumSoFar))

//     let newSum = currentNode.value + sumSoFar;

//     if (!currentNode.left && !currentNode.right && newSum === pathWeight) {
//       return true;
//     }

//     if (currentNode.left) stack.push([currentNode.left, newSum]);

//     if (currentNode.right) stack.push([currentNode.right, newSum]);
//   }

//   return false;
// }


// console.log(findLeaf(a,10))
// console.log(a)

// pre-order: self, left, right
// post-order: left, right, self
// in-order: left, self, right
