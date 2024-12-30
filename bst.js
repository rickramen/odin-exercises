// Binary Search Tree

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        if (array.length === 0) {
            throw new Error("Array is empty.");
        }
        const sortedArray = this.sortArray(array);
        this.root = this.buildTree(sortedArray);
    }

    sortArray(array) {
        return [...new Set(array)].sort((a, b) => a - b);
    }

    buildTree(array) {
        if (array.length === 0) {
            return null;
        }

        const mid = Math.floor(array.length / 2);
        const root = new Node (array[mid]);

        root.left = this.buildTree(array.slice(0, mid));
        root.right = this.buildTree(array.slice(mid + 1));

        return root; 
    }

    insert(node = this.root, value) {
        if (!node) {
            return new Node(value);
        }
        if(value === node.data) {
            return node;
        }
        if (value < node.data) {
            node.left = this.insert(node.left, value);
        } else {
            node.right = this.insert(node.right, value);
        }
        return node;
    }
    

    delete(node = this.root, value) {
        if (!node) {
            return null; 
        }

        if (value < node.data) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.data) {
            node.right = this.deleteNode(node.right, value);
        } else {
            if (!node.left) {
                return node.right; 
            } 
            else if (!node.right) {
                return node.left; 
            }
            const minNode = this.findMin(node.right);
            node.data = minNode.data; 
            node.right = this.deleteNode(node.right, minNode.data);
        }
        return node; 
    }

    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }
}

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);
tree.prettyPrint();  
