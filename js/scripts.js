function count(countTo){
  var newString = [];
  for (var i = 0; i <= countTo; i++) {
    newString.push(i);
  }
  newString = newString.join(" ");
  return newString;
}


$(function(){
  $('#counter').submit(function(event){
    event.preventDefault();
    var userInput = parseInt($('#user-input').val());
    var result = count(userInput);

    $('.output').text(result)
  });
});
