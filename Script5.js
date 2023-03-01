//1.Do the below programs in anonymous function & IIFE
//a.Print odd numbers in an array
//Anonymous Function:
var OddNumbers  = function(...ele){
    var odd = [];
    for (var i = 0; i < ele.length; i++){
      if (ele[i] % 2 !== 0){
        odd.push(ele[i]);
      }
    }
    return odd;
  }
  console.log(OddNumbers(1,2,3,4,5,6,7,8,9,10));
  //IIFE:
var OddNumbers  = (function(...ele){
    var odd = [];
    for (var i = 0; i < ele.length; i++){
      if (ele[i] % 2 !== 0){
        odd.push(ele[i]);
      }
    }
    return odd;
  })(1,2,3,4,5,6,7,8,9,10)
  console.log(OddNumbers);
//b.Convert all the strings to title caps in a string array
//Anonymous Function: 
var string= function(...ele){
    var capsstr = [];
    for (var i = 0; i < ele.length; i++){
        capsstr.push(ele[i].toUpperCase());
      }
    return capsstr;
  }
  
  console.log(string("mari","maryJane","captianAmerica","munnabai","jeff","chandran"));
 //IIFE:
var string= (function(...ele){
    var capsstr = [];
    for (var i = 0; i < ele.length; i++){
        capsstr.push(ele[i].toUpperCase());
      }
    return capsstr;
  })("mari","maryJane","captianAmerica","munnabai","jeff","chandran");
  console.log(string);
//c.Sum of all numbers in an array
//Anonymous Function: 
var sumofArr = function(...ele){
    var Arr= 0;
    for (var i = 0; i < ele.length; i++){
     Arr+=ele[i];   
    }
    return Arr;
  }
  console.log(sumofArr(1,2,3,4,5,6,7,8,9,10));
  //IIFE:
var sumofArr = (function(...ele){
    var Arr= 0;
    for (var i = 0; i < ele.length; i++){
     Arr+=ele[i];   
    }
    return Arr;
  })(1,2,3,4,5,6,7,8,9,10);
  console.log(sumofArr);
//d.Return all the prime numbers in an array
//Anonymous Function:
let primeArr = function(...arr){
    let prime = [];
    for(let i=0; i<arr.length; i++){
      let num = arr[i];
      let count = 0;
      for(let j=2; j<num; j++){
        if(num%j === 0){
          count++;
          break;
        }
      }
      if(count===0&&num>1){
        prime.push(num);
      }
    }
    return prime;
  }
  
  console.log(primeArr(1,2,3,4,7,6,5,10,11));
  //IIFE:
  let primeArrs = (function(...arr){
    let prime = [];
    for(let i=0; i<arr.length; i++){
      let num = arr[i];
      let count = 0;
      for(let j=2; j<num; j++){
        if(num%j === 0){
          count++;
          break;
        }
      }
      if(count===0&&num>1){
        prime.push(num);
    }
  }
    return prime;
})(1,2,3,4,7,6,5,10,11)
  console.log(primeArrs);
//e.Return all the palindromes in an array
//Anonymous Function:
var palindrome=function(...palin){
    var pal=[];
    for(var i=0;i<palin.length;i++){
      if(palin[i]==palin[i].split("").reverse().join("")){
        pal.push(palin[i]);
      }
    }
   return pal;   
  }
  console.log(palindrome("refer","121","rotator","Marvel","DC","deed","wow","noon"));
//IIFE:
  var palindrome=(function(...palin){
    var pal=[];
    for(var i=0;i<palin.length;i++){
      if(palin[i]==palin[i].split("").reverse().join("")){
        pal.push(palin[i]);
      }
    }
   return pal;   
  })("refer","121","rotator","Marvel","DC","deed","wow","noon");
  console.log(palindrome);
//f.Return median of two sorted arrays of the same size.
//Anonymous Function:
var median= function(...arrays) {
  const mergedArr = arrays.flat().sort((a, b) => a - b);
  const mid = Math.floor(mergedArr.length / 2);
  if (mergedArr.length % 2 === 0) {
    return (mergedArr[mid - 1] + mergedArr[mid]) / 2;
  } else {
    return mergedArr[mid];
  }
}
console.log(median((1, 3, 5, 7, 9),(2, 4, 6, 8, 10)));
//IIFE:
const median = (function(...arrays) {
  const mergedArr = arrays.flat().sort((a, b) => a - b);
  const mid = Math.floor(mergedArr.length / 2);
  if (mergedArr.length % 2 === 0) {
    return (mergedArr[mid - 1] + mergedArr[mid]) / 2;
  } else {
    return mergedArr[mid];
  }
})([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);

console.log(median);
//g.Remove duplicates from an array
//Anonymous Function:
var arr = function(...arrays){
  var filter=[];
  for(var i=0;i<arrays.length;i++){
    if(filter.indexOf(arrays[i])===-1){
      filter.push(arrays[i]);
    }
  }
  return filter;
}
console.log(arr(1,2,5,5,3,4,6));
//IIFE:
const arr = (function(...arrays) {
  const filter = [];
  for (let i = 0; i < arrays.length; i++) {
    if (filter.indexOf(arrays[i]) === -1) {
      filter.push(arrays[i]);
    }
  }
  return filter;
})(1, 2, 5, 5, 3, 4, 6,7,7);

console.log(arr);

//h.Rotate an array by k times
//Anonymous Function:
const rotatedArray = function(k, ...arr) {
  for (let i = 0; i < k; i++) {
    const temp = arr.shift();
    arr.push(temp);
  }
  return arr;
}
console.log(rotatedArray(2, 1, 2, 3, 4, 5));
 //IIFE:
const rotatedArr = (function() {
  return function(k, ...arr) {
    for (let i = 0; i < k; i++) {
      const temp = arr.pop();
      arr.unshift(temp);
    }
    return arr;
  }
})();
console.log(rotatedArr(2, 1, 2, 3, 4, 5));
//3.Do the below programs in arrow functions.
//a.Print odd numbers in an array
var OddNumbers  =(...ele)=>{
    var odd = [];
    for (var i = 0; i < ele.length; i++){
      if (ele[i] % 2 !== 0){
        odd.push(ele[i]);
      }
    }
    return odd;
  }
  console.log(OddNumbers(1,2,3,4,5,6,7,8,9,10));
  //b.Convert all the strings to title caps in a string array
  var string=(...ele)=>{
    var capsstr = [];
    for (var i = 0; i < ele.length; i++){
        capsstr.push(ele[i].toUpperCase());
      }
    return capsstr;
  }
  
  console.log(string("mari","maryJane","captianAmerica","munnabai","jeff","chandran"));
  //c.Sum of all numbers in an array
  var sumofArr =(...ele)=>{
    var Arr= 0;
    for (var i = 0; i < ele.length; i++){
     Arr+=ele[i];   
    }
    return Arr;
  }
  console.log(sumofArr(1,2,3,4,5,6,7,8,9,10));
  //d.Return all the prime numbers in an array
  let primeArr=(...arr)=>{
    let prime = [];
    for(let i=0; i<arr.length; i++){
      let num = arr[i];
      let count = 0;
      for(let j=2; j<num; j++){
        if(num%j === 0){
          count++;
          break;
        }
      }
      if(count===0&&num>1){
        prime.push(num); 
      }
    }
    return prime;
  }
  console.log(primeArr(1,2,3,4,7,6,5,10,11));
  //e.Return all the palindromes in an array
  var palindrome=(...palin)=>{
    var pal=[];
    for(var i=0;i<palin.length;i++){
      if(palin[i]==palin[i].split("").reverse().join("")){
        pal.push(palin[i]);
      }
    }
   return pal;   
  }
  console.log(palindrome("refer","121","rotator","Marvel","DC","deed","wow","noon"));