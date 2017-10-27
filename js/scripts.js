function process(countTo){

}


$(function(){
  $('#counter').submit(function(event){
    event.preventDefault();
    var userInput = parseInt($('#user-input').val());
    var result = process(userInput);

    $('.output').text(result)
  });
});
