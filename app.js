$(document).ready(function(){

let $input = $('#input');
let $submit = $('#submit');
let apiKey= "kADetQ01BAu11Qpipx9d9f6pVC3ksXPR"
let $imgBody = $('.img-body')
$submit.on('click', function(event){
    event.preventDefault();
    let inputVal = $input.val();
    getGif(inputVal);
});

function getGif(inputVal){
    $get("http://api.giphy.com/v1/gifs/search?q=' + inputVal + '&api_key=" + apiKey + "&limit=10")
    .done(function (data){
        for(let i = 0; i <= 10; i++){
            let gifImg = data.data[0].images.downsized.url);
            createBox(gifImg);
        }
        
    }); 
};

function createBox(gifImg) {
    let $newImg = $('<img>');
        $newImg.attr('src', )
    let $newDiv =$('div');
    
    $imgBody.append($newImg)
}

});