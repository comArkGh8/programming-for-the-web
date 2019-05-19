"use strict";

var outDisplay = $("#output");
var calcWindow = $("#display");

var disp;
var arg1;
var arg2;
var arg3;
var operation1 = '';
var operation2 = '';
var opInProgress = false;
var afterEq = false;
var afterOp = false;


function calcValue(a,b,op) {
  var newValue;
  switch (op){
    case '':
      break;
    case '+':
      newValue = a + b;
      break;
    case '-':
      newValue = a - b;
      break;
    case '*':
      newValue = a * b;
      break;
    case '/':
      if (b == 0){
        newValue = 'Infinity';
      }
      else{
        newValue = a / b;
      }
      break;
    }
    return newValue;
}

function resetVals(){
  operation1 = '';
  operation2 = '';
  arg1 = null;
  arg2 = null;
  arg3 = null;
  afterEq = false;
  afterOp = false;
}



function reduceThroughCases(){
  if (arg3){
    // op1 = +-; op2 = * /
    var last = calcValue(arg2,arg3,operation2);
    var total = calcValue(arg1,last,operation1);
    resetVals();
    arg1 = total;
    calcWindow.val(total);
  }
  else{
    var total = calcValue(arg1,arg2,operation1);
    resetVals();
    arg1 = total;
    calcWindow.val(total);
  }
}


function setArg2Arg3(){
  if (!arg2){
    arg2 = calcWindow.val();
    arg2 = Number(arg2);
  }
  else{
    arg3 = calcWindow.val();
    arg3 = Number(arg3);
  }
}

function changeOp(op){
  if (afterOp){
    if (operation2 == ''){
      operation1 = op;
    }
    else{
      operation2 = op;
    }
  }
}

function ignore(){
  if (operation1 == '' || afterOp || afterEq){
    return true;
  }
  return false;
}


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
    afterOp = false;
  }
});


$("#addButton").click(function() {
  if (afterOp){
    changeOp('+');
  }
  else{
    if (opInProgress) {
      setArg2Arg3();
      reduceThroughCases();
    }
    else{
      arg1 = calcWindow.val();
      arg1 = Number(arg1);
    }
    operation1 = '+';
    opInProgress = true;
    afterOp = true;
  }
});

$("#subtractButton").click(function() {
  if (afterOp){
    changeOp('-');
  }
  else{
    if (opInProgress) {
      setArg2Arg3();
      reduceThroughCases();
    }
    else{
      arg1 = calcWindow.val();
      arg1 = Number(arg1);
    }
    operation1 = '-';
    opInProgress = true;
    afterOp = true;
  }
});

$("#multiplyButton").click(function() {
  if (afterOp){
    changeOp('*');
  }
  else{
    if (opInProgress) {
      setArg2Arg3();
      operation2 = '*';
    }
    else{
      arg1 = calcWindow.val();
      arg1 = Number(arg1);
      operation1 = '*';
    }
    opInProgress = true;
    afterOp = true;
  }
});

$("#divideButton").click(function() {
  if (afterOp){
    changeOp('*');
  }
  else{
    if (opInProgress) {
      setArg2Arg3();
      operation2 = '/';
    }
    else{
      arg1 = calcWindow.val();
      arg1 = Number(arg1);
      operation1 = '/';
    }
    opInProgress = true;
    afterOp = true;
  }

});

$("#clearButton").click(function() {
  disp = null;
  calcWindow.val(disp);
  resetVals();
  opInProgress = false;
});

$("#equalsButton").click(function() {
  if (ignore()){
    //do nothing
  }
  else{
    setArg2Arg3();
    reduceThroughCases();
    opInProgress = false;
    afterOp = false;
    afterEq = true;
  }

});
