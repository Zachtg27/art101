/**
 * AJAX
 *
 * Learn more about AJAX.
 *
 * @link   URL
 * @file   This files defines the MyClass class.
 * @author ZacharyThompson.
 * @since  5.30.22
 */

$("#activate").click(function() {
  // Using the core $.ajax() method
  $.ajax({
     // The URL for the request (from the api docs)
     url: "https://api.chucknorris.io/jokes/random",
     // The data to send (will be converted to a query string)
     data: {},
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
     // What do we do when the api call is successful
     //   all the action goes in here
     success: function(data) {
         // do stuff
         console.log(data.value);
         var fact = data.value;
         $("#output").html(fact);
      },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
     }
  })
})
