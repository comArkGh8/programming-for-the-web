

var outDisplay = $("#output");
var calcWindow = $("#display");

var disp;
var oldValue;
var operation = '';


$("button").click(function() {
  var currDisp = calcWindow.val();
  disp = currDisp + $(this).val();
  calcWindow.val(disp);
});


$("#addButton").click(function() {
  oldValue = calcWindow.val();
  operation = '+';
  disp = null;
  calcWindow.val(disp);
  outDisplay.html('hi add');
});

$("#subtractButton").click(function() {
  oldValue = calcWindow.val();
  operation = '-';
  outDisplay.html('hi sub');
});

$("#multiplyButton").click(function() {
  oldValue = calcWindow.val();
  operation = '*';
  outDisplay.html('hi mult');
});

$("#clearButton").click(function() {
  outDisplay.html('hi clear');
});

$("#equalsButton").click(function() {
  var newValue;
  switch (operation){
    case '':
      break;
    case '+':
      newValue = Number(oldValue) + Number(disp);
      calcWindow.val(newValue);
      break;
    case '-':
      break;
    case '*':
      break;
    case '/':
      break;
  }
  operation = '';

});

$("#divideButton").click(function() {
  oldValue = calcWindow.val();
  operation = '/';
  outDisplay.html('hi divide');
});
