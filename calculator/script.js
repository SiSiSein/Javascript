(function() {
    "use strict";

    // Define variables
    var elBtnCal = document.getElementById("btnCal"),
        elBtnClear = document.getElementById("btnClear"),
        elResult = document.getElementById("result"),
        elForm = document.getElementById("form");

    function fnCal() {
        var num1 = parseFloat(document.getElementById("num1").value),
            num2 = parseFloat(document.getElementById("num2").value),
            sign = document.getElementById("sign").value,
            result;        
        
        if(sign == "*") {  result = num1 * num2;  } 
        else if(sign == "/") {   if (num2==0) {  result=0; alert("zero division error")}
                                 else result = num1 / num2;   } 
        else if(sign == "-") {   result = num1 - num2;     } 
        else result = num1 + num2;
              
        elResult.value = result;
    }

   function fnClear() {
        elForm.reset();
    }

    elBtnCal.addEventListener("click", fnCal, false);
    elBtnClear.addEventListener("click", fnClear, false);
}());