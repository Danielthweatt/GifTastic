'use strict';

// variables

let topicArray = ['Captain America', 'Iron Man', 'Spider-Man', 'Thor', 'Hulk', 
'Black Widow'];
let character;
let newTopic;
let textInput = $('#newCharacter');
let gifs = $('#gifs');

// function to create buttons

function makeButtons() {
  $('#buttons').empty();
  for (let i = 0; i < topicArray.length; i++) {
    let button = $('<button>');
    button.addClass('character btn btn-info col-xs-3');
    button.attr('data-name', topicArray[i]);
    button.text(topicArray[i]);
    $('#buttons').append(button);
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

$(document).on("click", ".character", function() {
  character = $(this).attr('data-name');
  let queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + character + '&limit=10&api_key=JxYv2NDJkk8wyy4ZZsHzJFNu1UMdIZr8';
  console.log(queryURL);
  gifs.empty();

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      let gifStill;
      let gif;
      console.log(response);
      for (let i = 0; i < response.data.length; i++) {
        gifStill = response.data[i].images.original_still.url;
        gif = response.data[i].images.original.url;
        gifrating = response.data[i].rating;
        gifs.append(`<img src="${gifStill}">`);
      };
  });

});

// function to animate GIFS

// function calls 

makeButtons();