/**
 * Loops
 *
 * Learn more about Loops.
 *
 * @link   URL
 * @file   This files defines the MyClass class.
 * @author ZacharyThompson.
 * @since  5.18.22
 */

maxFactors = 4;

outputEl = document.getElementById("output");


function getFactorObj() {
   var factorObj = {};
   for (var factor=0; factor<maxFactors; factor++) {
       numId = "num" + factor;
       textId = "text" + factor;
       numValue = document.getElementById(numId).value;
       textValue = document.getElementById(textId).value;
       if (numValue && textValue) {
           factorObj[numValue] = textValue;
       }
   }
   return factorObj;
}

function outputToPage(str) {
   newEl = document.createElement("p");
   newEl.innerHTML = str;
   outputEl.appendChild(newEl);
}


function fizzBuzzBoom(maxNums, factorObj) {
   // iterate through numbers
   for (var num=0; num<maxNums; num++) {
       // reset output
       var outputStr = "";
       // iterate over the html factors
       for (var factor in factorObj) {
           // check to see if this num is a multiple of factor
           if (num % factor == 0) {
               // if yes, than add the text to output string
               outputStr += factorObj[factor];
           }
       }
       if (outputStr) {
           outputStr = " - " + outputStr + "!";
       }
       outputToPage(num.toString() + outputStr)
   }
}

function reportError(str) {
   outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function() {
   var max = document.getElementById("max").value;
   if (! max) {
       reportError("You must provide a maximum");
       return;
   }
   var factorObj = getFactorObj();
   if (Object.keys(factorObj).length === 0) {
       reportError("You must provide at least one factor and text");
       return;
   }
   // clear error if there is one
   outputEl.innerHTML = "";
   fizzBuzzBoom(max, factorObj);
   outputEl.classList.add("cols");
})
