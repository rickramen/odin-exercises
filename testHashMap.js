const HashMap = require('./hashmap');

// New HashMap with 16 capacity, 0.75 load factor
const test = new HashMap(16, 0.75);

 test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden')

console.log('Length:', test.length());
console.log('Capacity:', test.capacity);

 // test overwrite
test.set('apple', 'green');
console.log('Updated node: "apple"')
console.log('Length:', test.length());
console.log('apple:', test.get('apple'));

// add new node, test grow
test.set('dragon', 'rainbow')
console.log('Added node: "dragon"')
console.log('Length:', test.length());
console.log('Capacity:', test.capacity);

// test functions
console.log('Has "lion"?', test.has('lion')); // 
console.log('Remove "carrot":', test.remove('carrot')); 
console.log('Length after remove:', test.length()); 
console.log('Keys:', test.keys()); 
console.log('Values:', test.values()); 
console.log('Entries:', test.entries()); 

// test clear
test.clear();
console.log('Cleared HashMap'); 
console.log('Length:', test.length());
console.log('Keys:', test.keys()); 
console.log('Values:', test.values()); 