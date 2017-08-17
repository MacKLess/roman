//Buisness Logic
  //
  // var I = 1;
  // var V = 5;
  // var X = 10;
  // var L = 50;
  // var C = 100;
  // var D = 500;
  // var M = 1000;
  var romanNumber = ["I", "V", "X", "L", "C", "D", "M"];

  var translator = function(standardNumber){
    var result = "";
    for (var i = standardNumber; i >= 1; i--){
      if (i >= 50){
        result += romanNumber[3];
        i -= 49;
      }

      else if (i >= 10){
        result += romanNumber[2];
        i-=9;
      }
      else if (i >= 5){
        result += romanNumber[1];
        i-=4;
      }
      else{
        result += romanNumber[0];
      }
    }
        return result;

    //   (standardNumber = 4){
    //     result += romanNumber[0+=1];
    //   }
    //   console.log(result);
    //   return result;
    // }
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
