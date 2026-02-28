import { Tree } from './bst.js';

// const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
// const tree1 = new Tree([1, 2, 3, 4]);
// tree.prettyPrint(tree1.root);
const tree3 = new Tree([2, 3, 4]);
tree3.insert(1);
tree3.insert(5);
const value = tree3.has(2);
console.log(value);
tree3.prettyPrint(tree3.root);
