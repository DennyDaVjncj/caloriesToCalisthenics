$(document).ready(function(){
  var minCal = 100-300;
  function getFood (calories){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.edamam.com/search?app_id=868b7c06&app_key=952e33eb5cdae0482626e48f05b6ba1f&q=desserts&calories=100-1000",
      "method": "GET",
    }
    $.ajax(
      settings
    ).then(function(response){
      // console.log(response)
      var calories = response.hits[0].recipe.calories;
      console.log(calories)
      var recipes = response.hits;
      // console.log(recipes)
      for (var i = 0; i < recipes.length; i++) {
        var recipeObj = recipes[i]
        // console.log(recipeObj)
        $("<div>").addClass("card")
        var rowDiv = $("<div>").addClass("row");
        var colDiv = $("<div>").addClass("col s12 m6");
        var cardDiv = $("<div>").addClass("card");
        var cardImg = $("<img>").addClass("card-image").attr("src", recipeObj.recipe.image)
        var card = rowDiv.append(colDiv, cardDiv, cardImg)
        $("#recipe-drop").append(card)

      };

     
    });
  };

$(".fire").on("click",function(){
getFood($(this).attr("data-calories"));
});
});

//programmatic iFrame player
let tag=document.createElement('script');
tag.src="https://www.youtube.com/iframe_api";
let firstScriptTag=document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);

  let player;
  function onYouTubeIframeAPIReady(){
  player=new YT.Player('player',{
    height:'100%',
    width:'100%',
    videoId:'M7lc1UVf-VE',
    events:{
      'onReady':onPlayerReady,
      // 'onStateChange':onPlayerStateChange
    }
  })
}
function onPlayerReady(e){
  e.target.playVideo();
}
//develop GET request ASAP!!!
// $.ajax({
//   url:queryURL,//HYPOTHETICAL
//   method:"GET"
// }).then(function(response){
//   console.log(response);
  //what do I want to happen after I fetch user request
// })
// $(".fire").on("click",function searchByKeyword{
//   let results 
// })

