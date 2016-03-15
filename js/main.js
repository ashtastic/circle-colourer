var $form = $('.form');
var $input = $('#color-selector');
var $ball = $('.ball');
var $color = $('.color');

$input.on('submit', function () {
  var newColor = $color.val('background-color');
  var $ball.css('background-color', change.value());
})






//var $body = $('html');

//$body.on('keydown', function () {

  //var $ball = $('<div>');

  //$ball.addClass('ball');

  //$body.append($ball);

  //$ball.css('left', Math.random() * 1000);

  //$ball.css('top', Math.random() * 1000);

  //$ball.css('background-color', Math.random());
//});
