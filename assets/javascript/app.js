'use strict';

// variables

let topicArray = ['Captain America', 'Iron Man', 'Spider-Man', 'Thor', 'Hulk', 
'Black Widow'];
let character;
let newTopic;
const buttons = $('#buttons');
const textInput = $('#newCharacter');
let gifStill;
let gif;
let gifrating;
let gifUrlArray = [];
const gifs = $('#gifs');
let animationUrlIndex;

// function to create buttons

function makeButtons() {
  buttons.empty();
  for (let i = 0; i < topicArray.length; i++) {
    let button = $('<button>');
    button.addClass('character btn btn-info');
    button.attr('data-name', topicArray[i]);
    button.text(topicArray[i]);
    buttons.append(button);
  };
};

// function to add a button

$('#submitButton').on('click', function(event) {
  event.preventDefault();
  newTopic = textInput.val().trim();
  topicArray.push(newTopic);
  textInput.val('');
  makeButtons();
});

// function to make API calls

$(document).on('click', '.character', function() {
  character = $(this).attr('data-name');
  let queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + character + '&limit=10&api_key=JxYv2NDJkk8wyy4ZZsHzJFNu1UMdIZr8';
  gifs.empty();
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
      for (let i = 0; i < response.data.length; i++) {
        gifStill = response.data[i].images.fixed_height_small_still.url;
        gif = response.data[i].images.fixed_height_small.url;
        gifrating = response.data[i].rating;
        gifUrlArray[i] = [gifStill, gif];
        let imageContainer = $('<div>');
        imageContainer.addClass('col-sm-4 col-md-3');
        imageContainer.append(`<img src="${gifStill}" class="gif" data-name="${i}">`, `<p>Rating: ${gifrating}</p>`);
        gifs.append(imageContainer);
      };
  });

});

// function to animate GIFS

$(document).on('click', '.gif', function() {
    animationUrlIndex = $(this).attr('data-name');
  if ($(this).attr('src') === gifUrlArray[animationUrlIndex][0]) {
    $(this).attr('src', gifUrlArray[animationUrlIndex][1]);
  } else {
    $(this).attr('src', gifUrlArray[animationUrlIndex][0]);
  };
});

// function calls 

makeButtons();