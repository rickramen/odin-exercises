const Tree = require('../bst');

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

const find1 = tree.find(tree.root, 1);
tree.prettyPrint();  

tree.insert(tree.root, 6);
tree.insert(tree.root, 150);
tree.insert(tree.root, 280);
tree.insert(tree.root, 315);
console.log('Inserted: 6, 150, 280, 315');
console.log('Deleted: 6');
tree.delete(tree.root, 6);
tree.prettyPrint(); 


console.log(find1 ? `Found node with value: ${find1.data}` : "Value not found.");

tree.levelOrder((node) => console.log('Level Order:',node.data));
tree.inOrder((node) => console.log('In-Order:', node.data));
tree.preOrder((node) => console.log('Pre-Order:', node.data));
tree.postOrder((node) => console.log('Post-Order:', node.data));

console.log('Height of root:',  tree.height(tree.root));
console.log('Depth of node 3:', tree.depth(tree.find(tree.root, 3)));
console.log('Is tree balanced?', tree.isBalanced() ? 'Yes' : 'No');

tree.rebalance();
console.log('Tree after rebalance:');
tree.prettyPrint();
console.log('Is tree balanced?', tree.isBalanced() ? 'Yes' : 'No');