$(document).ready(function () {

  function fire300(calories) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.edamam.com/search?q=cooki&app_id=bc8179cb&app_key=022c930d7b4fd86ded9d2a31ca7f7d9e&from=0&to=3&calories=301-500",
      "method": "GET",
    }
    $.ajax(
      settings
    ).then(function (response) {

      var name = response.hits[0].recipe.label;
      console.log(name)

      var calories = response.hits[0].recipe.calories;
      console.log(calories);

      var image = response.hits[0].recipe.image;
      console.log(image);

      var url = response.hits[0].recipe.url;
      console.log(url);

      var recipes = response.hits;
      // console.log(recipes)
      for (var i = 0; i < 1; i++) {
        var recipeObj = recipes[i]
        // console.log(recipeObj)
        $("<div>").addClass("card")
        var rowDiv = $("<div>").addClass("row");
        var colDiv = $("<div>").addClass("col s12 m6");
        var cardDiv = $("<div>").addClass("card");
        var cardDiv2 = $("<div>").addClass("card-image");
        var cardImg = $("<img>").addClass("card-image").attr("src", recipeObj.recipe.image);
        var cardUrl = $("<p>").addClass("recipe-link").attr("data-source", recipeObj.recipe.url);
        var cardLabel = $("<span>").addClass("card-title").attr("href", url);
        var cardName = $("<span>").addClass("card-title").attr("data-name", name);
        var card = rowDiv.append(colDiv, cardDiv, cardDiv2, cardImg, name);
        var card2 = colDiv.append(calories);
        $("#recipe-drop").append(card, card2);       
      };
    });
  };

  function fire500(five) {
    var settings5 = {
      "async": true,
      "crossDomain": true,      
      "url": "https://api.edamam.com/search?q=cake&app_id=bc8179cb&app_key=022c930d7b4fd86ded9d2a31ca7f7d9e&from=0&to=3&calories=301-500",
      "method": "GET",
    }
    $.ajax(
      settings5
    ).then(function(response) {

      var name = response.hits[0].recipe.label;
      console.log(name)

      var calories = response.hits[0].recipe.calories;
      console.log(calories);

      var image = response.hits[0].recipe.image;
      console.log(image);

      var url = response.hits[0].recipe.url;
      console.log(url);

      // console.log(response)
      var calories = response.hits[0].recipe.calories;
      console.log(calories)
      var recipes = response.hits;
      // console.log(recipes)
      for (var i = 0; i < 1; i++) {
        var recipeObj = recipes[i]
        // console.log(recipeObj)
        $("<div>").addClass("card")
        var rowDiv = $("<div>").addClass("row");
        var colDiv = $("<div>").addClass("col s12 m6");
        var cardDiv = $("<div>").addClass("card");
        var cardDiv2 = $("<div>").addClass("card-image");
        var cardImg = $("<img>").addClass("card-image").attr("src", recipeObj.recipe.image);
        var cardUrl = $("<p>").addClass("recipe-link").attr("data-source", recipeObj.recipe.url);
        var cardLabel = $("<span>").addClass("card-title").attr("href", url);
        var cardName = $("<span>").addClass("card-title").attr("data-name", name);
        var card = rowDiv.append(colDiv, cardDiv, cardDiv2, cardImg, name);
        var card2 = colDiv.append(calories);
        $("#recipe-drop").append(card, card2);

        console.log(settings5);
      }
    });
  }
  function fire1000(ten) {

    var settings10 = {
      "async": true,
      "crossDomain": true,
      // "url": "https://api.edamam.com/search?app_id=868b7c06&app_key=952e33eb5cdae0482626e48f05b6ba1f&q=desserts&calories=100-300",
      "url": "https://api.edamam.com/search?q=brownies&app_id=bc8179cb&app_key=022c930d7b4fd86ded9d2a31ca7f7d9e&from=0&to=3&calories=501-1000",
      "method": "GET",
    }
    $.ajax(
      settings10
    ).then(function (response) {
      var name = response.hits[0].recipe.label;
      console.log(name)

      var calories = response.hits[0].recipe.calories;
      console.log(calories);

      var image = response.hits[0].recipe.image;
      console.log(image);

      var url = response.hits[0].recipe.url;
      console.log(url);
      // console.log(response)
      var calories = response.hits[0].recipe.calories;
      console.log(calories)
      var recipes = response.hits;
      // console.log(recipes)
      for (var i = 0; i < 1; i++) {
        var recipeObj = recipes[i]
        // console.log(recipeObj)
        $("<div>").addClass("card")
        var rowDiv = $("<div>").addClass("row");
        var colDiv = $("<div>").addClass("col s12 m6");
        var cardDiv = $("<div>").addClass("card");
        var cardDiv2 = $("<div>").addClass("card-image");
        var cardImg = $("<img>").addClass("card-image").attr("src", recipeObj.recipe.image);
        var cardUrl = $("<p>").addClass("recipe-link").attr("data-source", recipeObj.recipe.url);
        var cardLabel = $("<span>").addClass("card-title").attr("href", url);
        var cardName = $("<span>").addClass("card-title").attr("data-name", name);
        var card = rowDiv.append(colDiv, cardDiv, cardDiv2, cardImg, name);
        var card2 = colDiv.append(calories);
        $("#recipe-drop").append(card, card2);

        console.log(settings10);
      }
    });
  }

  $("#fire300").on("click", function () {
    insertIFrame(300);
    $("#recipe-drop").empty();
    // fire300($(this).attr("data-calories"));
  });

  $("#fire500").on("click", function () {
    insertIFrame(500);
    $("#recipe-drop").empty();
    // fire500($(this).attr("data-calories"));
  });

  $("#fire1000").on("click", function () {
    insertIFrame(1000);
    $("#recipe-drop").empty();
    // fire1000($(this).attr("data-calories"));    
  });
})
// modal trigger
$('.modal').modal();

// let videoId = "";//perhaps this will take from our returned object

function insertIFrame(calories){
  let Vquery="&q="+calories+" calories!";//.syntax to find vid id property within object response
  
  let apiKey="&key=AIzaSyCg1nUbYturyaMWVeypxr6rMBs6i9HVN5I"//get the KEY! google Dev Console
  let qURL="https://cors-anywhere.herokuapp.com/https://youtube.googleapis.com/youtube/v3/search?part=snippet"+Vquery+apiKey;
  $.ajax({
    url:qURL,
    method:"GET"
  }).then(function(Data){
    console.log(Data);
    let videoId=Data.items[0].id.videoId//[i], for looping through objectValues
    onYouTubeIframeAPIReady(videoId);
  })

    //hardcoded version in providing "dynamic" responses
  // console.log(calories);   
  // if (calories === 300) {
  //   videoId = "1fDHrKRqy34";
  // } else if (calories === 500) {
  //   videoId ="LeOHID-EDA0";
  // } else if (calories === 1000) {
  //   videoId = "VUpGLzYJJNM";
  // }
  //ajax call needs configuring in order to provide the most dynamic experience to repeat/unique users 

  //programmatic iFrame player
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

let player;
function onYouTubeIframeAPIReady(videoId) {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId,//shortcut for videoId: videoId
    events: {
      'onReady': onPlayerReady,
    }
  });
}
function onPlayerReady(event){
  event.target.playVideo();
}
