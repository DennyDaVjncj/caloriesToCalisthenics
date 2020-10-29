$(document).ready(function(){
  var minCal = 100-300;
  function getFood (calories){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.edamam.com/search?app_id=868b7c06&app_key=952e33eb5cdae0482626e48f05b6ba1f&q=brownies&calories=100-1000",
      "method": "GET",
    }
    $.ajax(
      settings
    ).then(function(response){
      console.log(response)
      $(response).each(function(i,calories){
        $("#recipe-drop").append("<tr>")
      .append($("<td>").text(response.hits[0].recipe.calories))
      .append($("<td>").text(response.hits[0].recipe.dietLabels))
      })
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

