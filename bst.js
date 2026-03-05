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
	deleteItem(value, node = this.root) {
		if (node === null) return;
		if (node.data === value) {
			// no children
			if (node.left === null && node.right === null) {
				return null;
			}
			// one child
			if (node.left === null) {
				return node.right;
			}
			if (node.right === null) {
				return node.left;
			}
			// two children
			let successor = node.right;
			while (successor.left !== null) {
				successor = successor.left;
			}

			node.data = successor.data;
			node.right = this.deleteItem(successor.data, node.right);
			return node;
		}
		if (value < node.data) {
			node.left = this.deleteItem(value, node.left);
			return node;
		} else {
			node.right = this.deleteItem(value, node.right);
			return node;
		}
	}
	levelOrderForEach(callback, node = this.root) {
		if (typeof callback !== 'function') {
			throw new Error('A callback function is required');
		}
		if (node === null) return;

		const queue = [node];

		while (queue.length > 0) {
			const current = queue.shift();
			callback(current.data);
			if (current.left !== null) queue.push(current.left);
			if (current.right !== null) queue.push(current.right);
		}
	}
	inOrderForEach(callback, node = this.root) {
		if (typeof callback !== 'function') {
			throw new Error('A callback function is required');
		}
		if (node === null) return;

		this.inOrderForEach(callback, node.left);
		callback(node.data);
		this.inOrderForEach(callback, node.right);
	}
	preOrderForEach(callback, node = this.root) {
		if (typeof callback !== 'function') {
			throw new Error('A callback function is required');
		}
		if (node === null) return;
		callback(node.data);
		this.preOrderForEach(callback, node.left);
		this.preOrderForEach(callback, node.right);
	}
	postOrderForEach(callback, node = this.root) {
		if (typeof callback !== 'function') {
			throw new Error('A callback function is required');
		}
		if (node === null) return;
		this.postOrderForEach(callback, node.left);
		this.postOrderForEach(callback, node.right);
		callback(node.data);
	}
	_find(value, node = this.root) {
		if (node === null) return false;
		if (node.data === value) {
			return node;
		}
		if (value < node.data) {
			return this.find(value, node.left);
		} else {
			return this.find(value, node.right);
		}
	}
	heightOf(value) {
		const node = this._find(value);
		if (!node) return undefined;

		return heightFromNode(node);

		function heightFromNode(n) {
			if (n === null) return -1;

			const left = heightFromNode(n.left);
			const right = heightFromNode(n.right);

			return Math.max(left, right) + 1;
		}
	}
	depthOf(value, node = this.root, depth = 0) {
		if (node === null) return undefined;
		if (node.data === value) {
			return depth;
		}
		if (value < node.data) {
			return this.depthOf(value, node.left, depth + 1);
		} else {
			return this.depthOf(value, node.right, depth + 1);
		}
	}
	prettyPrint(node = this.root, prefix = '', isLeft = true) {
		if (node === null) return;

		this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);

		console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

		this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
	}
}

export { Tree };
