'use strict';

// variables

let topicArray = ['Captain America', 'Iron Man', 'Spider-Man', 'Thor', ];

// function to create buttons

function makeButtons() {
  $('#buttons').empty();
  for (let i = 0; i < topicArray.length; i++) {
    let button = $('<button>');
    button.addClass('btn btn-info col-xs-3');
    button.text(topicArray[i]);
    $('#buttons').append(button);
  };
};

makeButtons();

// function to add a button

// function to make API calls

//example API call (works so far!)
let queryURL = 'https://api.giphy.com/v1/gifs/search?q=spiderman&limit=10&rating=pg-13&api_key=JxYv2NDJkk8wyy4ZZsHzJFNu1UMdIZr8';

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//       let gifStill;
//       let gif;
//       console.log(response);
//       for (let i = 0; i < response.data.length; i++) {
//         gifStill = response.data[i].images.original_still.url;
//         gif = response.data[i].images.original.url;
//         console.log(gifStill);
//         console.log(gif);
//         $('#gifs').append(`<img src="${gifStill}">`);
//         // $('#gifs').append(`<img src="${gif}">`);
//       };
//   });

  // function to animate GIFS