const LinkedList = require('../linkedList');

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("horse");

console.log(list.toString());
console.log("Size:", list.size());
console.log("Head:", list.head());
console.log("Tail:", list.tail());
console.log("Index 3:", list.at(3));
console.log("Calling Pop():");
list.pop();
console.log("After Pop()", list.toString());
console.log("Contains 'cat': ", list.contains('cat'));
console.log("Contains 'human': ", list.contains('human'));
console.log("Find index 'cat':", list.find('cat'));