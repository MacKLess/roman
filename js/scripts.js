//Buisness Logic
  var romanNumber = ["I", "V", "X", "L", "C", "D", "M"];
  var translator = function(standardNumber){
    var result = "";
    for (var i = standardNumber; i >= 1; i--){
      if ((i >= 900) && (i < 1000)){
        result += romanNumber[4] + romanNumber[6];
        i -= 899;
      }
      else if ((i >= 400) && (i < 500)){
        result += romanNumber[4] + romanNumber[5];
        i -= 399;
      }
      else if ((i >= 90) && (i < 100)){
        result += romanNumber[2] + romanNumber[4];
        i -= 89;
      }
      else if ((i >= 40) && (i <= 49)){
        result += romanNumber[2] + romanNumber[3];
        i -= 39;
      }
      else if (i === 9){
        result += romanNumber[0] + romanNumber[2];
        i -= 9;
      }
      else if (i === 4){
        result += romanNumber[0] + romanNumber[1];
        i -= 4;
      }
      else if (i >= 1000){
        result += romanNumber[6];
        i -= 999;
      }
      else if (i >= 500){
        result += romanNumber[5];
        i -= 499;
      }
      else if (i >= 100){
        result += romanNumber[4];
        i -= 99;
      }
      else if (i >= 50){
        result += romanNumber[3];
        i -= 49;
      }
      else if (i >= 10){
        result += romanNumber[2];
        i -= 9;
      }
      else if (i >= 5){
        result += romanNumber[1];
        i -= 4;
      }
      else{
        result += romanNumber[0];
      }
    }
        return result;
  }

//user interface logic
$(document).ready(function(){
  $("#inPut").submit(function(event){
    $("#output").text("");
    var standardNumber = parseInt($("#inputNumber").val());
    var result = translator(standardNumber);
    console.log(standardNumber);
    $("#output").text(result);
  event.preventDefault();
  });
});
