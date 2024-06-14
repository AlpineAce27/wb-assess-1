// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers){
  let newArray = []
  for(let i = 0; i < numbers.length; i++){
    //check if the number is larger than 10, if so, then add it to the new array
    if(numbers[i] > 10){
      newArray.push(numbers[i])
    }
  }
  return newArray
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  let newArray = []
  for(let i = 0; i < words.length; i++){
    //use the "startsWith" method to find out if the current element starts with either a "b" or "B", if so, add it to the new array
    if(words[i].startsWith(`b`) || words[i].startsWith(`B`)){
      newArray.push(words[i])
      }
    }
  return newArray
}

// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  //make a new array to store the combined arrays
  let newArray = []
  //fill up the first section with the first array
  for (let i = 0; i < originalArray.length; i++) {
    newArray.push(originalArray[i]);
    }
  //fill up the second section with the next array (taking into account the starting position and correct indexes)
  for(let i = originalArray.length; i < (additionalItems.length + originalArray.length); i++){
    newArray.push(additionalItems[i-originalArray.length]);
  }
  return newArray;
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, keyLength) {
  let newArray = []
  for(let i = 0; i < items.length; i++)
    {
      //check to see if the item at the current index is the same length as the keyLength, if it is, add it to the new array
      if(items[i].length === keyLength)
      {
        newArray.push(items[i])
      }
    }
  return newArray
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  let newArray = []
  for(let i = 0; i < items.length; i += 2){
    newArray.push(items[i])
  }
  return newArray
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  let newArray = []
  for(let i = 0; i < words.length; i++){
    //use the "startsWith" method to find out if the current element starts with either a the letter specified, if so, add it to the new array
    if(words[i].startsWith(letter)){
      newArray.push(words[i])
    }
  }
  return newArray
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  let outputArray = []
  /*we have to sort the array. The sort function alone tries to sort the array by the first character of each element, treating them as strings.
  To sort by number, we have to add extra steps. first we use "a" and "b" as parameters in an arrow function. (=> being the arrow)
  We use a-b to sort least to greatest, and we could also use b-a to sort greatest to least. */ 
  let sortedArray = items.sort((a, b) => a - b)
  for (let i = 0; i < n; i++) {
      outputArray.push(items[i])
    }
  return outputArray
}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === value) {
      //if we found an instance of the value, return the index number and exit the function
      return i
    }
  }
  //if we get to this point it means we searched the entire array and no instance was found. This means we need to return "undefined"
  return undefined
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  let outputArray = []
  //on the for loop, make sure we begin at the specified start, and make sure we dont pass the specified end point
  for (let i = start; i <= stop; i++) {
    outputArray.push(i)
  }
  return outputArray
}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
