/**
 * Javascript for the web Lab.
 *
 * Learn about Javascript for the web.
 *
 * @link   URL
 * @file   This files defines the MyClass class.
 * @author ZacharyThompson.
 * @since  5.4.22
 */

// find div and assign to variable
var outputEl = document.getElementById("output");

var new1El = document.createElement("p");

// change attribute of new1E1
new1El.id = 'stud 1';
new1El.innerHTML = "ZACH";
var new2El = document.createElement("p");
// change attribute of new2EI
new2El.id = 'stud 2';
new2El.innerHTML = "NICO";
//append to output
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
//change css style
new1El.style.color = "blue";
new1El.style.fontSize = "30pt";
new2El.style.color = "green";
new2El.style.fontSize = "30pt";
