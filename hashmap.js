// HashMap

class HashMap {
    constructor( capacity, loadFactor) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(capacity).fill(null).map(() => []);
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = 
            (primeNumber * hashCode + key.charCodeAt(i))
            % this.buckets.length;
        }
     
        return hashCode;
    } 

    set(key, value) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
 
        // Update bucket
        for (const pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value; 
                return;
            }
        }
        bucket.push([key, value]); 
        this.size++;
    
        if (this.size / this.capacity > this.loadFactor) {
            this.grow();
        }
    }
    
    get(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
         
        for (const pair of bucket) { 
            if (pair[0] === key) return pair[1]; 
        } 
        return null
    }

    has(key) {
        return this.get(key) !== null;
    }

    remove(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
    
        const bucket = this.buckets[index];
    
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); 
                this.size--; 
                return true; // true when removed
            }
        }
        return false; // false when key not in hash map
    }
    
    length() {
        return this.size;
    }
    
    // removes all entries in the hash map
    clear() {
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
        this.size = 0;
    }
    
    // returns an array containing all the keys inside the hash map
    keys() {
        const keysArray = [];
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                keysArray.push(pair[0]);
            }
        }
        return keysArray;
    }
    
    //  returns an array containing all the values
    values() {
        const valuesArray = [];
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                valuesArray.push(pair[1]); 
            }
        }
        return valuesArray;
    }
    
    // returns an array that contains each key, value pair
    entries() {
        const entriesArray = [];
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                entriesArray.push([pair[0], pair[1]]); 
            }
        }
        return entriesArray;
    }
    
    // double capacity of buckets
    grow() {
        const oldBuckets = this.buckets;
        this.capacity *= 2; 
        this.buckets = new Array(this.capacity).fill(null).map(() => []); 
        this.size = 0; 
        
        // re-insert key-value pairs
        for (const bucket of oldBuckets) {
            for (const [key, value] of bucket) {
                this.set(key, value); 
            }   
        }
    }
}

module.exports = HashMap;
