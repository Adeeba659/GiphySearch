/* 1. Grab the input value */

document.querySelector(".js-go").addEventListener('click',function(){

	var input = document.querySelector("input").value;
	pushToDOM(input);

});


document.querySelector(".js-userinput").addEventListener('keyup',function(e){

	var user = document.querySelector("input").value;

	if(e.which == 13){
		pushToURLDOM(user);

	}
});


/* 2. do the data stuff with the API */

function pushToURLDOM(user){
var url = "https://api.giphy.com/v1/gifs/search?q="+ user +"&api_key=SDEsWMHoj4DO7LFMxWFHlVJVkElcDm8h";



//AJAZ Request 
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();


GiphyAJAXCall.addEventListener('load',function(e){

	var data = e.target.response;
	console.log(e);

	pushToDOM(data);




});

}

/* 3. Show me the GIFs */
function pushToDOM(input){

	var response = JSON.parse(input);
	var imageUrls = response.data;
	var container = document.querySelector(".js-container");

	imageUrls.forEach(function(image){

		var src = image.images.fixed_height.url;

		
		container.innerHTML+="<img src=\"" + src + "\" class=\"container-image\">";


	});

	


}