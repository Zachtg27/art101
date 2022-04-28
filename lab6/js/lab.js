/**
 * Arrays and Objects Lab.
 *
 * Learn about javascript arrays and objects.
 *
 * @link   URL
 * @file   This files defines the MyClass class.
 * @author ZacharyThompson.
 * @since  4.25.22
 */

// define variables
 myTransport = ["City Bus", "Honda Accord", "Rides From Friends"];

 myMainRide = {
   make: "Honda",
   model: "Accord",
   color: "Space Grey",
   year: 2008,
   age: function(){
     return 2022 - year;
   }
 };

 //output
 document.writeln("Ways I get around: ", myTransport, "</br>");
 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
