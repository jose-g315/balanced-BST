import { Tree } from './bst.js';

function createRandomNumberArray(number) {
	const array = [];
	for (let i = 0; i < number; i++) {
		array.push(Math.floor(Math.random() * number) + 1);
	}
	return array;
}
const tree = new Tree(createRandomNumberArray(15));
tree.prettyPrint();
console.log('Is Tree Balanced? :', tree.isBalanced());
console.log('Lever Order:');
tree.levelOrderForEach((value) => {
	console.log(value);
});
tree.prettyPrint();
console.log('Pre Order:');
tree.preOrderForEach((value) => {
	console.log(value);
});
tree.prettyPrint();
console.log('Post Order:');
tree.postOrderForEach((value) => {
	console.log(value);
});
tree.prettyPrint();
console.log('In Order:');
tree.inOrderForEach((value) => {
	console.log(value);
});
tree.prettyPrint();
tree.insert(101);
tree.insert(102);
tree.insert(110);
tree.insert(123);
tree.insert(123);
tree.insert(109);
tree.insert(105);
tree.prettyPrint();
console.log('Is Tree Balanced? :', tree.isBalanced());
tree.reBalance();
tree.prettyPrint();
console.log('Is Tree Balanced? :', tree.isBalanced());

console.log('Lever Order:');
tree.levelOrderForEach((value) => {
	console.log(value);
});
tree.prettyPrint();
console.log('Pre Order:');
tree.preOrderForEach((value) => {
	console.log(value);
});
tree.prettyPrint();
console.log('Post Order:');
tree.postOrderForEach((value) => {
	console.log(value);
});
tree.prettyPrint();
console.log('In Order:');
tree.inOrderForEach((value) => {
	console.log(value);
});
tree.prettyPrint();
