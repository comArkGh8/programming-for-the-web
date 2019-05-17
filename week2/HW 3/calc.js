"use strict";

var outDisplay = $("#output");
var calcWindow = $("#display");

var disp;
var oldValue;
var operation = '';
var afterOp = false;
var afterEq = false;


$("button").click(function() {
  var currValue = $(this).val();
  if (currValue != ''){
    // a number has been pressed
    // check if after an operation or equals
    if (afterOp || afterEq){
      disp = $(this).val();;
      calcWindow.val(disp);
    }
    else {
      var currDisp = calcWindow.val();
      disp = currDisp + $(this).val();
      calcWindow.val(disp);
    }
    afterEq = false;
  }
});


$("#addButton").click(function() {
  if (afterOp) {
    oldValue = Number(oldValue) + Number(disp);
    calcWindow.val(oldValue);
  }
  else{
    oldValue = calcWindow.val();
    operation = '+';
  }
  afterOp = true;
});

$("#subtractButton").click(function() {
  if (afterOp) {
    oldValue = Number(oldValue) - Number(disp);
    calcWindow.val(oldValue);
  }
  else{
    oldValue = calcWindow.val();
    operation = '-';
  }
  afterOp = true;
});

$("#multiplyButton").click(function() {
  if (afterOp) {
    oldValue = Number(oldValue) * Number(disp);
    calcWindow.val(oldValue);
  }
  else{
    oldValue = calcWindow.val();
    operation = '*';
  }
  afterOp = true;
});

$("#divideButton").click(function() {
  if (afterOp) {
    oldValue = Number(oldValue) / Number(disp);
    calcWindow.val(oldValue);
  }
  else{
    oldValue = calcWindow.val();
    operation = '/';
  }
  afterOp = true;
});

$("#clearButton").click(function() {
  disp = null;
  calcWindow.val(disp);
  oldValue = null;
  operation = '';
  afterOp = false;
  afterEq = false;
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
      newValue = Number(oldValue) - Number(disp);
      calcWindow.val(newValue);
      break;
    case '*':
      newValue = Number(oldValue) * Number(disp);
      calcWindow.val(newValue);
      break;
    case '/':
      var denom = Number(disp);
      if (denom == 0){
        display = 'Infinity';
        calcWindow.val(display);
      }
      else{
        newValue = Number(oldValue) / denom;
        calcWindow.val(newValue);
      }
      break;
  }
  operation = '';
  afterEq = true;
  afterOp = false;

});
