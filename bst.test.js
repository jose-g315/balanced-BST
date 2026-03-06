import { Tree } from './bst.js';

describe('balanced binary search tree', () => {
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
	describe('isBalanced()', () => {
		test('isBalanced returns true for a perfectly balanced tree', () => {
			const tree = new Tree([1, 2, 3, 4, 5, 6, 7]); // buildTree creates balanced BST
			expect(tree.isBalanced()).toBe(true);
		});
		test('isBalanced returns true for a tree that is balanced but not perfect', () => {
			const tree = new Tree([10, 5, 15, 3, 7, 12]);
			expect(tree.isBalanced()).toBe(true);
		});
		test('isBalanced returns false for a right-heavy unbalanced tree', () => {
			const tree = new Tree([10, 5, 15]);
			tree.insert(20);
			tree.insert(25); // creates a chain 15 → 20 → 25
			expect(tree.isBalanced()).toBe(false);
		});
		test('isBalanced returns false for a left-heavy unbalanced tree', () => {
			const tree = new Tree([10, 5, 15]);
			tree.insert(4);
			tree.insert(3);
			tree.insert(2); // chain 5 → 4 → 3 → 2
			expect(tree.isBalanced()).toBe(false);
		});
		test('isBalanced returns true for an empty tree', () => {
			const tree = new Tree([]);
			expect(tree.isBalanced()).toBe(true);
		});
		test('isBalanced returns true for a single-node tree', () => {
			const tree = new Tree([10]);
			expect(tree.isBalanced()).toBe(true);
		});
		test('isBalanced returns false for a completely skewed tree', () => {
			const tree = new Tree([1]);
			tree.insert(2);
			tree.insert(3);
			tree.insert(4);
			tree.insert(5);
			expect(tree.isBalanced()).toBe(false);
		});
	});
	describe('reBalance()', () => {
		test('reBalance keeps a balanced tree balanced', () => {
			const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
			expect(tree.isBalanced()).toBe(true);
			tree.reBalance();
			expect(tree.isBalanced()).toBe(true);
			const values = [];
			tree.inOrderForEach((value) => {
				values.push(value);
			});
			expect(values).toEqual([1, 2, 3, 4, 5, 6, 7]);
		});
		test('reBalance turns an unbalanced tree into a balanced one', () => {
			const tree = new Tree([10]);
			tree.insert(20);
			tree.insert(30);
			tree.insert(40);
			tree.insert(50);
			expect(tree.isBalanced()).toBe(false);
			tree.reBalance();
			expect(tree.isBalanced()).toBe(true);
		});
		test('reBalance preserves all values', () => {
			const tree = new Tree([10]);
			tree.insert(5);
			tree.insert(15);
			tree.insert(3);
			tree.insert(7);
			tree.insert(20);
			tree.insert(25);
			const before = [];
			tree.inOrderForEach((value) => {
				before.push(value);
			});
			tree.reBalance();
			const after = [];
			tree.inOrderForEach((value) => {
				after.push(value);
			});
			expect(after).toEqual(before);
		});
		test('reBalance changes the structure of an unbalanced tree', () => {
			const tree = new Tree([1]);
			tree.insert(2);
			tree.insert(3);
			tree.insert(4);
			tree.insert(5);
			const beforeHeight = tree.heightFromNode(tree.root);
			tree.reBalance();
			const afterHeight = tree.heightFromNode(tree.root);
			expect(afterHeight).toBeLessThan(beforeHeight);
		});
		test('reBalance works on an empty tree', () => {
			const tree = new Tree([]);
			tree.reBalance();
			expect(tree.isBalanced()).toBe(true);
			const values = [];
			tree.inOrderForEach((value) => {
				values.push(value);
			});
			expect(values).toEqual([]);
		});
	});
});
