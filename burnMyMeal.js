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
});

//develop GET request ASAP!!!
let tag=document.createElement('script');
tag.src="https://www.youtube.com/iframe_api";
let firstScriptTag=document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);
//need to attach functionality to user request
let player;
function onYouTubeIframeAPIReady(){
  player=new YT.Player('player',{
    height:'100%',
    width:'100%',
    videoId:'M7c1UVf-VE',
    events:{
      'onReady':onPlayerReady,
      'onStateChange':onPlayerStateChange
    }
  })
}
function onPlayerReady(e){
  e.target.playVideo();
}
let done=false;
function onPlayerStateChange(e){
  if(e.data==YT.PlayerState.PLAYING&&!done){
    setTimeout(stopVideo,6000);
    done=true;
    //this function cuts off after 6 seconds of play time
    //gonna do a lot of tinkering tomorrow for sure!
  }
}
function stopVideo(){
  player.stopVideo();
}