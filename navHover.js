
$(document).ready(function(){
  //Handles the hover mechanic
  $("li").hover(
    //Change the background-color of the li to the same color as the hr border-color
    function(){
      $(this).css("background-color", $(this).find("hr").css("border-color"));
    },
    //Change the background-color of the li back to its original color when the mouse leaves the li
    function(){
      $(this).css("background-color","#313131");
    }
  );
});
