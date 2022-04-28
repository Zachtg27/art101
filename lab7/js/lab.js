/**
 * Functions Lab.
 *
 * Learn about javascript functions.
 *
 * @link   URL
 * @file   This files defines the MyClass class.
 * @author ZacharyThompson.
 * @since  4.27.22
 */

// define function
function sortName() {
  var userName = window.prompt("Hi, please tell me your name so I can fix it.");
  console.log("userName =", userName);
  // convert to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort Array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // convert back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  // return sorted name
  return nameSorted;
}
// output
document.writeln("Oh hey, I've fixed your name: ",
  sortName(), "</br>");
