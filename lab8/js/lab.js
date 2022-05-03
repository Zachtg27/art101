/**
 * Anon Functions and CaLLbacks Lab.
 *
 * Learn about javascript Anon functions and Calbacks.
 *
 * @link   URL
 * @file   This files defines the MyClass class.
 * @author ZacharyThompson.
 * @since  5.2.22
 */

//define function
function Double(x){
  return (x * 2);
}

//test function
console.log("What is double 1? ", Double(1));
console.log("What is double 25? ", Double(25));

//create array of numbers
array = [100, 20, 30, 64, 55, 17, 90]
console.log("My array", array);

var result = array.map(Double);
//should return [200, 40, 60, 128, 110, 34, 180]
console.log("Double every value in the array: ", result);

var result = array.map(function(x){
  return x / 2;
})
// should return [50, 10, 15, 32, 27.5, 8.5, 45]
console.log("Half of every value in the array: ", result);
