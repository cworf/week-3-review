var counted = []

function count(countTo, name){
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
      return "Pod Bay door " + number + " is opening...";
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

    if (userName) {
      for (i = 0; i < result.length; i++){
      (function(i){
        if (/!/.test(result[i])){
          var glow = "inset 0 0 111px rgba(0, 198, 245, 0.83)";
          var color = "#00c6f5";
        } else if (/sorry/.test(result[i])) {
          var glow = "inset 0 0 111px red";
          var color = "red";
        } else {
          var glow = "inset 0 0 111px rgba(0, 245, 56, 0.78)";
          var color = "green";
        }
        setTimeout(function(){
          scrollOutput();
        }, 2000 * i);
      }(i));
    }
    } else {
      for (i = 0; i < 15; i++){
        (function(i){
          setTimeout(function(){
            $('.output-box').append("<div class='start' style='color:red; font-size:10px'>Not authorized!!</div>");
            $('.start').addClass("bottom").delay(10).queue(function(next){
              $(this).addClass('up');
              next();
            });
            $('.output-box').addClass("flash").css('box-shadow', 'inset 0 0 111px red')
          }, 200 * i);
        }(i));
      }
    }
  });
  function scrollOutput() {
    $('.output-box').append("<div class='start' style='color:" + color + ";'>" + result[i] + "</div>");
    $('.speech').text("Open pod bay door " + counted[i] + ", Hal");
    $('.start').addClass("bottom").delay(10).queue(function(next){
      $(this).addClass('up');
      next();
    });
    $('.output-box').addClass("flash").css('box-shadow', glow).delay(10).queue(function(next){
      $(this).removeClass('flash').css("box-shadow", "");
      next();
    });
  }
});
