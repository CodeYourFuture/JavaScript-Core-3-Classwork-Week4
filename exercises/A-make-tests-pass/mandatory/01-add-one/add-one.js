module.exports = function addOne(numbers) {
  /* Implement the function to make the tests pass */
  //let [numOne, numTwo, numThree, numFour] = myArray;\
  console.log(numbers)
  return numbers.map((num) =>{
    console.log(num)
   return  num += 1;
  })

};
