import { Tree } from './bst.js';

describe('balanced binary search tree', () => {
	//let tree;

	// beforeEach(() => {
	// 	tree = new Tree([5, 3, 3, 1, 4, 2, 2]);
	// });
	describe('constructor and buildTree', () => {
		test('constructor sorts and removes duplicates', () => {
			const tree = new Tree([5, 3, 3, 1, 4, 2, 2]);
			// The root of a balanced tree built from [1,2,3,4,5] is 3
			expect(tree.root.data).toBe(3);
		});
		test('buildTree creates a balanced BST', () => {
			const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

			expect(tree.root.data).toBe(4);
			expect(tree.root.left.data).toBe(2);
			expect(tree.root.right.data).toBe(6);

			expect(tree.root.left.left.data).toBe(1);
			expect(tree.root.left.right.data).toBe(3);

			expect(tree.root.right.left.data).toBe(5);
			expect(tree.root.right.right.data).toBe(7);
		});
		test('buildTree returns null for empty array', () => {
			const tree = new Tree([]);
			expect(tree.root).toBeNull();
		});
	});
	describe('has(value)', () => {
		test('has on an empty tree', () => {
			const tree = new Tree([]);
			expect(tree.has(1)).toBeFalsy();
		});
		test('has on an tree after insert', () => {
			const tree = new Tree([2, 3, 4]);
			expect(tree.has(1)).toBeFalsy();
			expect(tree.has(2)).toBeTruthy();
			tree.insert(1);
			tree.insert(5);
			expect(tree.has(1)).toBeTruthy();
			expect(tree.has(5)).toBeTruthy();
		});
	});
	describe('insert(value)', () => {
		test('insert correctly inserts a value', () => {
			const tree = new Tree([2, 3, 4]);
			tree.insert(1);
			tree.insert(5);
			expect(tree.root.data).toBe(3);
			expect(tree.root.left.data).toBe(2);
			expect(tree.root.right.data).toBe(4);
			expect(tree.root.left.left.data).toBe(1);
			expect(tree.root.right.right.data).toBe(5);
		});
	});
	describe('deleteItem(value)', () => {
		test('deleting an item when the tree has it and when not', () => {
			const tree = new Tree([1, 2, 3, 4, 5]);
			tree.deleteItem(1);
			expect(tree.has(1)).toBeFalsy;
			tree.deleteItem(3);
			expect(tree.has(3)).toBeFalsy;
		});
	});
	describe('traversals', () => {
		test('levelOrderForEach', () => {
			const tree = new Tree([1, 2, 3, 4, 5]);
			const result = [];
			tree.levelOrderForEach((value) => result.push(value));
			expect(result).toEqual([3, 2, 5, 1, 4]);
		});
		test('inOrderForEach', () => {
			const tree = new Tree([1, 2, 3, 4, 5]);
			const result = [];
			tree.inOrderForEach((value) => result.push(value));
			expect(result).toEqual([1, 2, 3, 4, 5]);
		});
		test('preOrderForEach', () => {
			const tree = new Tree([1, 2, 3, 4, 5]);
			const result = [];
			tree.preOrderForEach((value) => result.push(value));
			expect(result).toEqual([3, 2, 1, 5, 4]);
		});
		test('postOrderForEach', () => {
			const tree = new Tree([1, 2, 3, 4, 5]);
			const result = [];
			tree.postOrderForEach((value) => result.push(value));
			expect(result).toEqual([1, 2, 4, 5, 3]);
		});
	});
	describe('heighOf(value)', () => {
		test('height of a node', () => {
			const tree = new Tree([1, 2, 3, 4, 5]);
			expect(tree.heightOf(2)).toBe(1);
			expect(tree.heightOf(6)).toBeUndefined();
		});
	});
	describe('depthOf(value)', () => {
		test('depth of a node', () => {
			const tree = new Tree([1, 2, 3, 4, 5]);
			expect(tree.depthOf(1)).toBe(2);
			expect(tree.depthOf(6)).toBeUndefined();
		});
	});
});
