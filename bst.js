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
            node.left = this.delete(node.left, value);
        } else if (value > node.data) {
            node.right = this.delete(node.right, value);
        } else {
            // node has no children
            if (!node.left && !node.right) {
                return null;
            } 
            // node has 1 child
            if (!node.left) {
                return node.right; 
            } 
            else if (!node.right) {
                return node.left; 
            }
            // node has two children
            const minNode = this.findMin(node.right);
            node.data = minNode.data; 
            node.right = this.delete(node.right, minNode.data);
        }
        return node; 
    }

    find(node = this.root, value) {
        if (!node || node.data === value) {
            return node;
        }
        if (value < node.data) {
            return this.find(node.left, value);
        }
        return this.find(node.right, value);
    }

    levelOrder(callback) {
        if (typeof callback !== 'function') {
            throw new Error("A callback function is required.");
        }

        // Array to act as a queue
        const queue = [this.root];
        
        while (queue.length > 0) {
            // Dequeue the first node
            const node = queue.shift(); 
            
            // callback node
            callback(node);

            // Enqueue the left and right child nodes
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    inOrder(callback, node = this.root) {
        if (typeof callback !== 'function') {
            throw new Error("A callback function is required.");
        }
    
        if (node === null) {
            return;
        }

        this.inOrder(callback, node.left);
        callback(node);
        this.inOrder(callback, node.right);
    }

    preOrder(callback, node = this.root) {
        if (typeof callback !== 'function') {
            throw new Error("A callback function is required.");
        }
    
        if (node === null) {
            return;
        }

        callback(node);
        this.preOrder(callback, node.left);
        this.preOrder(callback, node.right);
    }

    postOrder(callback, node = this.root) {
        if (typeof callback !== 'function') {
            throw new Error("A callback function is required.");
        }
    
        if (node === null) {
            return;
        }

        this.postOrder(callback, node.left);
        this.postOrder(callback, node.right);
        callback(node);
    }

    height(node = this.root) {
        if (!node) {
            return -1;
        }
        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    depth(node) {
        let currentNode = this.root;
        let depth = 0;

        while (currentNode !== null) {
            if (node.data < currentNode.data) {
                currentNode = currentNode.left;
            } else if (node.data > currentNode.data) {
                currentNode = currentNode.right;
            } else {
                return depth;
            }
            depth++;
        }

        return -1; 
    }


    isBalanced(node = this.root) {
        if (!node) {
            return true;
        } 

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }

        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }

    rebalance() {
        const sortedArray = [];
        this.inOrder((node) => sortedArray.push(node.data));
        this.root = this.buildTree(sortedArray);
    }

    
    /* Helper Functions */ 
    
    findMin(node) {
        while (node.left !== null) {
            node = node.left;
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

module.exports = Tree;


