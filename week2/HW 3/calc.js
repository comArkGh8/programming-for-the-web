

var outDisplay = $("#output");
var calcWindow = $("#display");

function numberButton() {
  outDisplay.html('hi');
  var currValue = calcWindow.val();
  var newValue = currValue + $(this).val();
  calcWindow.val(newValue);
};

function buttonHandler(b){
  if (b.value == '1'){
    numberButton();
  }
  else{
    // then it is an operation
  }
};

$("button").click(buttonHandler);
