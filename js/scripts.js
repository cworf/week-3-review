function count(countTo){
  var counted = [];
  for (var i = 0; i <= countTo; i++) {
    counted.push(i);
  }
  var replaced = counted.map(function(number){
    if (/1/.test(number)) {
      return "Boop!"
    } else if (/0/.test(number)) {
      return "Beep!";
    } else {
      return number;
    }
  });
  replaced = replaced.join(" ")
  return replaced;
}


$(function(){
  $('#counter').submit(function(event){
    event.preventDefault();
    var userInput = parseInt($('#user-input').val());
    var result = count(userInput);

    $('.output').text(result)
  });
});
