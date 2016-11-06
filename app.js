$(document).ready(function() {



console.log("hi there");

$("#addBut").on("click", function() {
   var item = $("#add").val();
   var htmlAdd = '<div><li class="shopping-item"><span class="strike">' + item + '</span><br><button class="check">Check</button><button class="delete">Delete</button></li></div>';
   $("ul").append(htmlAdd);
   $("#add").val("");
 });

 //EVENT LISTENERS
//PREVENT FORM SUBMIT ON BUTTON CLICK
 $("form").submit(function(e) {
   e.preventDefault();
 });
//CHECK

 $("ul").on("click", ".check", function(e) {
 	
  $(this).closest("li").children(".strike").toggleClass("checkStyle");
 });
//DELETE
 $("ul").on("click", ".delete", function(e) {
   $(this).closest("div").empty();
 });











});