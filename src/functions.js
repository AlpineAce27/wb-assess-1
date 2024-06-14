// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return x/y
}
// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  return (x + y) / 2;
}

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
  if(x-y < 0.001 && x-y > -0.001){
    return true}
  else if(y-x < 0.001 && y-x > -0.001){
    return true}
  else{
    return false}
}

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}


// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
  return  `${person} was drinking ${beverage} at ${location}`
}
// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
function censorVowels(string) {
  //define characters we want to take notice of
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let outputString = string
  //make a loop to run through the string 
  for(let i = 0; i < string.length; i++){
   //make another loop to loop through the vowels array
    
    for(let k = 0; k < vowels.length; k++){
      //check to see if the current vowel matches the current character in the string
      if(string[i] === vowels[k]){
        //censor it
        //console.log(`${string[i]} has been censored`)
        outputString = outputString.replace(outputString[i], "*")
      }
    }
  }
  return outputString;
}

// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
function stickyCase(string) {

  //make sure it starts out all lowercase
  string = string.toLowerCase()
  //console.log(string, + " " + string.length)
  //cycle through the string starting at the beginning
  for(let i = 0; i < string.length; i++){
    
    //0 and 1 might be unique cases, so we assign them to lowercase and uppercase manually
    if(i === 0){
      string = string.replace(string[i], string[i].toLowerCase())
      //console.log(string[i], + " " + i)
    }
    else if (i === 1){
      string = string.replace(string[i], string[i].toUpperCase())
    //console.log(string[i], + " " + i)
    }
    else if(i % 2 === 0){// if i is divisible by 2 then it is an "even" index which we can assign to lowercase
      string = string.replace(string[i], string[i].toLowerCase())
    //console.log(string[i], + " " + i)
    }
    else{//if i is not divisble by 2 then it is an "odd" index which we an assign to uppercase
      string = string.replace(string[i], string[i].toUpperCase())
    //console.log(string[i], + " " + i)
    }
  }
  return string
}

// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
function leetspeak(string) {
  for(let i = 0; i < string.length; i++){
    if(string[i] === "a"){
      string = string.replace("a", "4")
    }
    if(string[i] === "e"){
      string = string.replace("e", "3")
    }
    if(string[i] === "i"){
      string = string.replace("i", "1")
    }
    if(string[i] === "o"){
      string = string.replace("o", "0")
    }
    if(string[i] === "s"){
      string = string.replace("s", "5")
    }
    if(string[i] === "t"){
      string = string.replace("t", "7")
    }
  }
  return string
}

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
}
