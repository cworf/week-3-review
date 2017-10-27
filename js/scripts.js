function count(countTo){
  var counted = [];
  for (var i = 0; i <= countTo; i++) {
    counted.push(i);
  }
  var replace0 = counted.map(function(number){
    if (/0/g.test(number)) {
      return "Beep!";
    } else {
      return number;
    }
  });
  replace0 = replace0.join(" ")
  return replace0;
}


$(function(){
  $('#counter').submit(function(event){
    event.preventDefault();
    var userInput = parseInt($('#user-input').val());
    var result = count(userInput);

    $('.output').text(result)
  });
});
