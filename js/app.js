'use strict';

let companyName = [];
// let whyArr = [];

$(document).ready(function(){
  $.ajax('companyNames.json').then(companyJson => {
    companyJson.forEach(eachCompany =>{
      render(eachCompany);
      renderPage(eachCompany);

    });
    console.log('done');

  })

});


function render(info){
  $('#company').append(`<option class="${info.name}">${info.name}</option>`);
  companyName.push(info.name, info.why);

}

function renderPage(whyWork) {
  $('select').change(function(){

    $('select option:selected').each(function(){
      // $('p').text('');
      let $companyChoice = $('select option:selected').val();

      $('.yours').text($companyChoice);
      //   if($companyChoice ===)
      ///find the word in the arry
      ///return index number
      ///add 1 to the index number 
      ///return new index number
      $('.pTag').text(whyWork.why);
    });

  })
    .trigger('change');

}



