//Buisness Logic

  var I = 1;
  var V = 5;
  var X = 10;
  var L = 50;
  var C = 100;
  var D = 500;
  var M = 1000;
  var romanNumber = ["I", "V", "X", "L", "C", "D", "M"];

  var translator = function(standardNumber){
    var result = "";
    for (var i = 1; i <= standardNumber; i++)
    {
      result += romanNumber[0];
    }
    return result;

}

//user interface logic
$(document).ready(function(){
  $("#inPut").submit(function(event){
    var standardNumber = parseInt($("#inputNumber").val());
    var result = translator(standardNumber);
    console.log(standardNumber);
    $("#output").append(result);



  event.preventDefault();
  });
});
