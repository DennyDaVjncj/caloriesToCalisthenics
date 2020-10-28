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
<<<<<<< HEAD
          
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
=======
    // function display(){
      // var calorie300 = 300;
      // var APIKey = "AIzaSyCg1nUbYturyaMWVeypxr6rMBs6i9HVN5I&q"   
      // var queryURL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCg1nUbYturyaMWVeypxr6rMBs6i9HVN5I&q=300calorieworkout"
      //         $.ajax({
      //           url: queryURL,
      //           method: "GET"
      //         }).then(function(response) {
      //           console.log(response);
      //         })
      // }
      // display();  
// });

// var cal300 = 100-300

// basic api call for edamam api site 
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=brownies&calories=100-10000",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
		"x-rapidapi-key": "29d4b4a7a3msh69d092a323b96fdp14da3ajsnfaf566370825"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
>>>>>>> 9395eaa69be50732dcdfc26e32b2f5003db48dc9
});