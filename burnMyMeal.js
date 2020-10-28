$(document).ready(function(){
    var minCal = 100-300;
    function getFood (calories){
      console.log(calories)
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.edamam.com/search?app_id=868b7c06&app_key=952e33eb5cdae0482626e48f05b6ba1f&q=sugar&calories=100-" + calories ,
        "method": "GET",
      }
   $.ajax(
    settings
   ).then(function(response){
  displayFood()
   })
  };
  $(".fire").on("click",function(){
  getFood($(this).attr("data-calories"));
  })