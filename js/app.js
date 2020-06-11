'use strict';

let companyName = [];

$(document).ready(function(){
  $.ajax('companyNames.json').then(data => {
    data.forEach(things =>{
      render(things);

    });
  })
});

function render(info){
  $('.company').append(`<option value="${info.name}">${info.name}</option>`);
  companyName.push(info.name);
}


