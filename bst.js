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
	prettyPrint(node = this.root, prefix = '', isLeft = true) {
		if (node === null) return;

		this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);

		console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

		this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
	}
}

export { Tree };
