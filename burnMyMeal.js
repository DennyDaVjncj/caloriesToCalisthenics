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
console.log(response)

 })
};

$(".fire").on("click",function(){
getFood($(this).attr("data-calories"));




})


  



    // var instance = M.Carousel.init({
    //     fullWidth: true,
    //     indicators: true
    //   });
    
    //   // Or with jQuery
    
    //   $('.carousel.carousel-slider').carousel({
    //     fullWidth: true,
    //     indicators: true
    //   });
          
      // function display(){

      //   // var calorie300 = 300;
      //   // var APIKey = "AIzaSyCg1nUbYturyaMWVeypxr6rMBs6i9HVN5I&q"   
      //   var queryURL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCg1nUbYturyaMWVeypxr6rMBs6i9HVN5I&q=300calorieworkout"
      //           $.ajax({
      //             url: queryURL,
      //             method: "GET"
      //           }).then(function(response) {
      //             console.log(response);
      //           })
      //   }
      //   display();  
});