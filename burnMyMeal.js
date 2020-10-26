// $(document).ready(function(){

    // var instance = M.Carousel.init({
    //     fullWidth: true,
    //     indicators: true
    //   });
    
    //   // Or with jQuery
    
    //   $('.carousel.carousel-slider').carousel({
    //     fullWidth: true,
    //     indicators: true
    //   });
          
      function display(){

        // var calorie300 = 300;
        // var APIKey = "AIzaSyCg1nUbYturyaMWVeypxr6rMBs6i9HVN5I&q"   
        var queryURL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCg1nUbYturyaMWVeypxr6rMBs6i9HVN5I&q=300calorieworkout"
                $.ajax({
                  url: queryURL,
                  method: "GET"
                }).then(function(response) {
                  console.log(response);
                })
        }
        display();  
// });