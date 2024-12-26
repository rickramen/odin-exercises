// Merge Sort

function mergeSort (array) {
    // Base case for array that is empty or 1 
    if (array.length < 2){
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right) {
    let sortedArray = [];
    let leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArray.push(left[leftIndex]);
            leftIndex++;
        }else {
            sortedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // Combine and return remaining elements in left and right arr
    return sortedArray.concat
            (left.slice(leftIndex), right.slice(rightIndex));
}


const array = [3, 2, 1, 13, 8, 5, 0, 1];
const sortedArray = mergeSort(array);
console.log("Unsorted Array:", array);
console.log("Sorted Array:", sortedArray);