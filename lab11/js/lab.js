/**
 * Libraries and jQuery.
 *
 * Learn more about libraries and jQuery.
 *
 * @link   URL
 * @file   This files defines the MyClass class.
 * @author ZacharyThompson.
 * @since  5.11.22
 */

// create buttons using jquery
$("#challenges").append("<button id='btn-1'>Button</button>");
$("#problems").append("<button id='btn-2'>Button</button>");
$("#results").append("<button id='btn-3'>Button</button>");

// create event listener
$("#btn-1").click(function(){
  $(this).parent().toggleClass("special");
})

$("#btn-2").click(function(){
  $(this).parent().toggleClass("special");
})

$("#btn-3").click(function(){
  $(this).parent().toggleClass("special");
})
