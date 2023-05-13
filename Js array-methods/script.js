// Js Arrays Methods

let myArr = [1, 2, 3, 4, 5, 6, 7];
// tostring
console.log(myArr.toString());

// join method
console.log("Join ----> ", myArr.join(" - "));

// Pop method to remove from last index
myArr.pop();
console.log("pop ----> ", myArr);

// push method to add at last index
myArr.push(6);
console.log("push ----> ", myArr);

// shift method to remove from first index
myArr.shift();
console.log("shift ----> ", myArr);

// unshift method to add at first index
myArr.unshift(0);
console.log("unshift ----> ", myArr);

// sort method to sort the array in ascending or escending order
myArr.sort();
console.log("sort ----> ", myArr);

// At method to find the number at that index
let myVal = myArr.at(2);
console.log("At ----> ", myVal);

// Concat method to contact to arrays
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let newArr = arr1.concat(arr2);
console.log("Concat ----> ", newArr);

// Reverse method to reverse an array
let arr3 = ["a", "b", "c", "d", "e"];
arr3.reverse();
console.log("Reverse ----> ", arr3);

// Filter method to filter elements from array
let arrFilter = myArr.filter(checkEven);
console.log("Filter ----> ", arrFilter);
function checkEven(val) {
  return val % 2 === 0;
}

// Splice method to delete element from specific index and then add elements to it
// Slice ----> modifies the main array
let arr = [1, 2, 3, 4, 5];
let newArr1 = arr.splice(2, 3, 8, 9, 10);
console.log("Splice ----> ", arr);
console.log("Spliced elements are ----> ", newArr1);

// Slice ----> returns a new array
let Arr = [1, 2, 3, 4, 5];
let newArr2 = Arr.slice(2, 4);
console.log("Slice ----> ", newArr2);

// Map method to map the array
let arrMap = Arr.map((val) => val * 2);
console.log("Map ----> ", arrMap);

// Every method to check if all the elements are true
let arrEvery = Arr.every((val) => val > 3);
console.log("Every ----> ", arrEvery);

// Some method to check if any of the elements are true
let arrSome = Arr.some((val) => val > 3);
console.log("Some ----> ", arrSome);

// Reduce method to reduce the array
let arrReduce = Arr.reduce((acc, val) => acc * val);
console.log("Reduce ----> ", arrReduce);

// ForEach method
let arrForEach = Arr.forEach((val) => {
  console.log(val);
});
