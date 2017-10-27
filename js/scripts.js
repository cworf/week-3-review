function count(countTo, name){
  var counted = [];
  for (var i = 0; i <= countTo; i++) {
    counted.push(i);
  }
  var replaced = counted.map(function(number){
    if (number % 3 === 0) {
      return "I'm sorry " + name + ", I'm afraid I can't do that.";
    } else if (/1/.test(number)) {
      return "Boop!";
    } else if (/0/.test(number)) {
      return "Beep!";
    } else {
      return number;
    }
  });

  return replaced;
}


$(function(){
  $('#counter').submit(function(event){
    event.preventDefault();
    var userInput = parseInt($('#user-input').val());
    var userName = $('#user-name').val();
    var result = count(userInput, userName);
console.log(result);
    for (i = 0; i < result.length; i++){
      (function(i){
        setTimeout(function(){
          $('.output-box').append("<div class='start'>" + result[i] + "</div>");
          $('.start').addClass("bottom").delay(10).queue(function(next){
            $(this).addClass('up');
            next();
          });
          $('.output-box').addClass("flash").delay(10).queue(function(next){
            $(this).removeClass('flash');
            next();
          });
        }, 2000 * i);
      }(i));
    }
  });
});
