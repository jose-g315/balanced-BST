class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}
class Tree {
	constructor(array) {
		// using set to remove duplicates
		const sortedArray = [...new Set(array)].sort((a, b) => a - b);
		this.root = this._buildTree(sortedArray);
	}
	_buildTree(array) {
		if (array.length === 0) return null;

		const midIndex = Math.floor(array.length / 2);
		const root = new Node(array[midIndex]);
		root.left = this._buildTree(array.slice(0, midIndex));
		root.right = this._buildTree(array.slice(midIndex + 1));
		return root;
	}
	has(value, node = this.root) {
		if (node === null) return false;
		if (node.data === value) return true;
		if (value < node.data) {
			return this.has(value, node.left);
		} else {
			return this.has(value, node.right);
		}
	}
	insert(value, node = this.root) {
		if (node === null) {
			return new Node(value);
		}
		if (value < node.data) {
			node.left = this.insert(value, node.left);
		} else {
			node.right = this.insert(value, node.right);
		}
		return node;
	}
	prettyPrint(node = this.root, prefix = '', isLeft = true) {
		if (node === null) return;

		this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);

		console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

		this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
	}
}

export { Tree };
