/**
 * Javascript events and forms lab.
 *
 * Learn about Javascript events and forms.
 *
 * @link   URL
 * @file   This files defines the MyClass class.
 * @author ZacharyThompson.
 * @since  5.10.22
 */

var outputEl = document.getElementById("output");
// define function
function sortName(x) {
  // convert to array
  var nameArray = x.split('');
  console.log("nameArray =", nameArray);
  //sort Array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // convert back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  // return sorted name
  //alert(nameSorted);
  var op = document.createElement("op");
  var node = document.createTextNode(nameSorted);
  op.appendChild(node);
  document.getElementById("output").appendChild(op);
  //outputEl.appendChild(nameSorted);
}
