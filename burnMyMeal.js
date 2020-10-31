$(document).ready(function () {
  // var minCal = 100 - 300;
  function fire300(calories) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.edamam.com/search?q=sweets&app_id=bc8179cb&app_key=022c930d7b4fd86ded9d2a31ca7f7d9e&from=0&to=3&calories=301-500",
      "method": "GET",
    }
    $.ajax(
      settings
    ).then(function (response) {
      // console.log(response)
      var calories = response.hits[0].recipe.calories;
      console.log(response);
      console.log(calories);
      var url = response.hits[0].recipe.url;
      console.log (url);
      var recipes = response.hits;
      // console.log(recipes)
      for (var i = 0; i < 2; i++) {
        var recipeObj = recipes[i]
        // console.log(recipeObj)
        $("<div>").addClass("card")
        var rowDiv = $("<div>").addClass("row");
        var colDiv = $("<div>").addClass("col s12 m6");
        var cardDiv = $("<div>").addClass("card");
        var cardImg = $("<img>").addClass("card-image").attr("src", recipeObj.recipe.image);
        var card = rowDiv.append(colDiv, cardDiv, cardImg);
        $("#recipe-drop").append(card);
        // $(".card").append(url);

      };
    });
  };
//  $.ajax({
//   settings
//  })
//  .then(function(response){
//   $(response).each(function(i, recepie){
//     // $("#recepie-drop").append($("<tr>").append($("<td>").append(recepie.)
//   })
//    $("#recepie-drop").recepie.text();
// displayFood()
//  })
$(".fire").on("click",function(){
getFood($(this).attr("data-calories"));
//three functions to fire
$.ajax({
  url:"",
  method:"GET"
}).then(function(response){
  console.log(response);
  let userClick=$(this).val()
  if()
})
});
});

//programmatic iFrame player
//empty variable for taking in userInput/capturing click event-> let userRequest; can be input or clickEvent
//iFrame shouldn't appear

//pay attention to scope
  //nest click event within function, maybe not

let tag=document.createElement('script');
tag.src="https://www.youtube.com/iframe_api/search?"+userPref+"q=";//query url to be built out 
let firstScriptTag=document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);

  //target needed for specific parameters[properties]
  //for loop to parse through object response
  let player;
  let userPref=$(this).attr("data-calories");//give buttons dataAttr
  function onYouTubeIframeAPIReady(response){
    console.log(response)
  player=new YT.Player('player',{
    height:'100%',
    width:'100%',
    videoId:'',//store user query, click or otherwise:val()
    events:{
      'onReady':onPlayerReady,
      // 'onStateChange':onPlayerStateChange
    }
  })
}
function onPlayerReady(e){
  e.target.playVideo();
}

// function response(res){
//   for(let i=0;i<res)
// }