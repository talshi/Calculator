/*
BUGS:
- hold for clear, backspace
- sqrt of y
- change ans init to undefined instead of 0
- multiple factorials doesn't work
*/




$(document).ready(function () {
    localStorage.clear();
    // nav bar
    $("#homelink").click(function () {
        window.location = "index.html"; 
    });

    $("#simplecalclink").click(function () {
        window.location = "simple_calc.html";
    });
    
    $("#scicalclink").click(function () {
        window.location = "sci_calc.html"; 
    });
    
    $("#basecalclink").click(function () {
        window.location = "base_calc.html"; 
    });
    
    $("#contactlink").click(function () {
        window.location = "contact.html"; 
    });
   
    if(window.location.href.indexOf("index.html") != -1) {
        $("#homelink").css("border-bottom", "3px solid lightblue");
    }
    else if(window.location.href.indexOf("simple_calc.html") != -1) {
        $("#simplecalclink").css("border-bottom", "3px solid lightblue");
    }
    else if(window.location.href.indexOf("sci_calc.html") != -1) {
        $("#scicalclink").css("border-bottom", "3px solid lightblue");
    }
    else if(window.location.href.indexOf("base_calc.html") != -1) {
        $("#basecalclink").css("border-bottom", "3px solid lightblue");
    }
    else if(window.location.href.indexOf("contactlink.html") != -1) {
        $("#contactlink").css("border-bottom", "3px solid lightblue");
    }
    
    // simple and scientific calculator
    var calctext = "";
    var op = "";
    var ans = 0;
    
    $("#history-clr").click(function () {
       $("#history").val(""); 
    });
    
    // calc buttons
    $("#clear").click(function () {
        calctext = "";
        op = "";
        ans = undefined;
        $("#calc-text").html("");
    });
    
//    $("#clear").mousedown(function () {
//        hold = setInterval(function () {
//            $("#clear").html("Clearing...");
//            holdclear = setInterval(function () {
//                calctext = "";
//                op = "";
//                ans = undefined;
//                $("#calc-text").html("");
//            }, 500)
//            
//        }, 300);
//        clearInterval(holdclear);
//    }).mouseup(function () { 
//        clearInterval(hold);
//        $("#clear").html("&larr;/Clear");
//        var text = $("#calc-text").val();
//        text = text.slice(0, -1);
//        $("calc-text").val(text);
//    });
    
    $("#seven").click(function () {
        if(op == "" && calctext != "" && ans != undefined) {
            calctext = "";
            ans = undefined;
        }
        calctext += 7;
        $("#calc-text").html(calctext);
    });
    
    $("#four").click(function () {
        if(op == "" && calctext != "" && ans != undefined) {
            calctext = "";
            ans = undefined;
        }
        calctext += 4;
        $("#calc-text").html(calctext);
    });
    
    $("#one").click(function () {
        if(op == "" && calctext != "" && ans != undefined) {
            calctext = "";
            ans = undefined;
        }
        calctext += 1;
        $("#calc-text").html(calctext);
    });
    
    $("#percent").click(function () {
        op = "%";
        if(calctext == "")
            calctext = "0";
        else if(calctext != "" && ans != 0 && op != "") {
            calctext = ans;
        }
        var text = calctext + "% = ";
        calctext = calctext / 100;
        text += calctext;
        ans = Number(calctext);
        $("#calc-text").html(text);
        calctext = $("#calc-text").val();
        $("#history").val($("#history").val() + calctext + "\n");
        $("#history").scrollTop($("#history")[0].scrollHeight)
    });
    
    $("#power").click(function () {
        op = "^";
        if(calctext == "")
            calctext = "0";
        else if(calctext != "" && ans != 0 && op != "") {
            calctext = ans;
        }
        var text = calctext + "^2 = ";
        calctext = Math.pow(calctext, 2);
        text += calctext;
        ans = Number(calctext);
        $("#calc-text").html(text);
        calctext = $("#calc-text").val();
        $("#history").val($("#history").val() + calctext + "\n");
        $("#history").scrollTop($("#history")[0].scrollHeight)
    });
    
    $("#powerof").click(function () {
        op = "^y";
        if(calctext == "")
            calctext = "0";
        else if(calctext != "" && ans != 0 && op != "") {
            calctext = ans;
        }
        calctext += "^";
        $("#calc-text").html(calctext);
        calctext = $("#calc-text").val();
        $("#history").val($("#history").val() + calctext + "\n");
        $("#history").scrollTop($("#history")[0].scrollHeight)
    });
    
    $("#eight").click(function () {
        if(op == "" && calctext != "" && ans != undefined) {
            calctext = "";
            ans = undefined;
        }
        calctext += 8;
        $("#calc-text").html(calctext);
    });
    
    $("#five").click(function () {
        if(op == "" && calctext != "" && ans != undefined) {
            calctext = "";
            ans = undefined;
        }
        calctext += 5;
        $("#calc-text").html(calctext);
    });
    
    $("#two").click(function () {
        if(op == "" && calctext != "" && ans != undefined) {
            calctext = "";
            ans = undefined;
        }
        calctext += 2;
        $("#calc-text").html(calctext);
    });
    
    $("#zero").click(function () {
        if(op == "" && calctext != "" && ans != undefined) {
            calctext = "";
            ans = 0;
        }
        calctext += 0;
        $("#calc-text").html(calctext);
    });
    
    $("#sqrt").click(function () {
        op = "sqrt";
        if(calctext == "")
            calctext = "0";
        else if(calctext != "" && ans != 0 && op != "") {
            calctext = ans;
        }
        var text = "sqrt(" + calctext + ") = ";
        calctext = Math.sqrt(calctext);
        text += calctext;
        ans = Number(calctext);
        $("#calc-text").html(text);
    });
    
    $("#nine").click(function () {
        if(op == "" && calctext != "" && ans != undefined) {
            calctext = "";
            ans = undefined;
        }
        calctext += 9;
        $("#calc-text").html(calctext);
    });
    
    $("#six").click(function () {
        if(op == "" && calctext != "" && ans != undefined) {
            calctext = "";
            ans = undefined;
        }
        calctext += 6;
        $("#calc-text").html(calctext);
    });
    
    $("#three").click(function () {
        if(op == "" && calctext != "" && ans != undefined) {
            calctext = "";
            ans = undefined;
        }
        calctext += 3;
        $("#calc-text").html(calctext);
    });
    
    $("#point").click(function () {
        calctext += ".";
        $("#calc-text").html(calctext);
    });
    
    $("#divide").click(function () {
        op = "/";
        if(calctext == "")
            calctext = "0";
        else if(calctext != "" && ans != 0 && op != "") {
            calctext = ans;
        }
        calctext += "/";
        $("#calc-text").html(calctext);
    });
    
    $("#multiple").click(function () {
        op = "*"
        if(calctext == "")
            calctext = "0";
        else if(calctext != "" && ans != 0 && op != "") {
            calctext = ans;
        }
        calctext += "*";
        $("#calc-text").html(calctext);
    });
    
    $("#minus").click(function () {
        op = "-";
        if(calctext == "")
            calctext = "0";
        else if(calctext != "" && ans != 0 && op != "") {
            calctext = ans;
        }
        calctext += "-";
        $("#calc-text").html(calctext);
    });
    
    $("#plus").click(function () {
        op = "+";
        if(calctext == "")
            calctext = "0";
        else if(calctext != "" && ans != 0 && op != "") {
            calctext = ans;
        }
        calctext += "+";
        $("#calc-text").html(calctext);
    });
    
    $("#equal").click(function () {
        var numbers;
        var calc = 0;
        if(op == "^y") {
            var numbers = calctext.split("^");
            calc = Math.pow(numbers[0], numbers[1]);
        }
        else if(op == "sqrty") {
            
        }
        else if(op == "+" || op == "-" || op == "*" || op == "/" || op == "") {
            calc = eval(calctext);
        }
        calctext += " = " + calc;
        ans = calc;
        $("#calc-text").html(calctext);
        $("#history").val($("#history").val() + calctext + "\n");
        $("#history").scrollTop($("#history")[0].scrollHeight)
    });
    
    $("#sinus").click(function () {
        if(calctext == "")
            calctext = "0";
        else if(calctext != "" && ans != 0) {
            calctext = ans;
        }
        var text = "sin(" + calctext + ") = ";
        calctext = Math.sin(calctext);
        ans = calctext;
        text += calctext;
        $("#calc-text").html(text);
        calctext = $("#calc-text").val();
        $("#history").val($("#history").val() + calctext + "\n");
        $("#history").scrollTop($("#history")[0].scrollHeight)
    });
    
    $("#cosinus").click(function () {
        if(calctext == "")
            calctext = "0";
        else if(calctext != "" && ans != 0) {
            calctext = ans;
        }
        var text = "cos(" + calctext + ") = ";
        calctext = Math.cos(calctext);
        ans = calctext;
        text += calctext;
        $("#calc-text").html(text);
        calctext = $("#calc-text").val();
        $("#history").val($("#history").val() + calctext + "\n");
        $("#history").scrollTop($("#history")[0].scrollHeight)
    });
    
    $("#tangent").click(function () {
        if(calctext == "")
            calctext = "0";
        else if(calctext != "" && ans != 0) {
            calctext = ans;
        }
        var text = "tan(" + calctext + ") = ";
        calctext = Math.tan(calctext);
        ans = calctext;
        text += calctext;
        $("#calc-text").html(text);
        calctext = $("#calc-text").val();
        $("#history").val($("#history").val() + calctext + "\n");
        $("#history").scrollTop($("#history")[0].scrollHeight)
    });
    
    $("#logarithm").click(function () {
        if(calctext == "")
            calctext = "0";
        else if(calctext != "" && ans != 0) {
            calctext = ans;
        }
        calctext = ans;
        var text = "log(" + calctext + ") = "
        calctext = Math.log(calctext);
        ans = calctext;
        text += calctext;
        $("#calc-text").html(text);
        calctext = $("#calc-text").val();
        $("#history").val($("#history").val() + calctext + "\n");
        $("#history").scrollTop($("#history")[0].scrollHeight)
    });
    
    $("#factorial").click(function () {
        var text = "";
        if(calctext == "") {
           // text = "0! = 1";
            calctext = "0";
        }
        else if(calctext != "" && ans != 0) {
            calctext = ans;
        }
        //else {
            text = calctext + "! = "
            var factor = Number(calctext);
            for(var i = factor-1; i > 0; i--) {
                factor *= i;
            }
            text += factor;
        //}
        ans = calctext;
        $("#calc-text").html(text);
        calctext = $("#calc-text").val();
        $("#history").val($("#history").val() + calctext + "\n");
        $("#history").scrollTop($("#history")[0].scrollHeight)
    });
    
    $("#memorysave").click(function () {
        if(op == "") {
            ans = calctext;
        }
        localStorage.setItem("ans", ans)
        $("#memoryreserved").css("color", "red");
        $("#memory-text").html(ans);
    });
    
    $("#memoryclear").click(function () {
        localStorage.clear();
        $("#memoryreserved").css("color", "black");
        $("#memory-text").html("");
    });
    
    $("#memoryplus").click(function () {
        var tmpans = Number(localStorage.getItem("ans"));
        tmpans += ans;
        localStorage.setItem("ans", tmpans);
        $("#memory-text").html(tmpans);
    });
    
    $("#memoryminus").click(function () {
        var tmpans = Number(localStorage.getItem("ans"));
        tmpans -= ans;
        localStorage.setItem("ans", tmpans);
        $("#memory-text").html(tmpans);
    });
    
    $("#memoryreserved").click(function () {
        var m = localStorage.getItem("ans");
        if(m) {
            $("#calc-text").html(m);
            calctext += m;
        }
    });
    
    // base calculator
    $("#basesfrom").change(function () {
        if($("#basesfrom").val() == "Hexdecimal") {
            $("#basecalcfrom").val("0x");
        }
        else {
            $("#basecalcfrom").val("");
        }
    })
    
    $("#convert").click(function () {
        var optionfrom = $("#basesfrom").val();
        var optionto = $("#basesto").val();
        var num = Number($("#basecalcfrom").val());
        if(optionfrom == "Decimal") {
            if(optionto == "Decimal") {
                $("#basecalcto").val(num);
            }
            else if(optionto == "Hexdecimal") {
                var convertednum = num.toString(16).toUpperCase();
                $("#basecalcto").val(convertednum);
            }
            else if(optionto == "Octal") {
                var convertednum = num.toString(8);
                $("#basecalcto").val(convertednum);
            }
            else if(optionto == "Binary") {
                var convertednum = num.toString(2);
                $("#basecalcto").val(convertednum);
            }
        }
        else if(optionfrom == "Hexdecimal") {
            var numInDecimal = parseInt(num, 10);
            if(optionto == "Decimal") {
                $("#basecalcto").val(numInDecimal);
            }
            else if(optionto == "Hexdecimal") {
                $("#basecalcto").val($("#basecalcfrom").val());
            }
            else if(optionto == "Octal") {
                var numInOctal = numInDecimal.toString(8);
                $("#basecalcto").val(numInOctal);
            }
            else if(optionto == "Binary") {
                var numInBinary = numInDecimal.toString(2);
                $("#basecalcto").val(numInBinary);
            }
        }
        else if(optionfrom == "Octal") {
            var numInDecimal = parseInt(num, 8);
            if(optionto == "Decimal") {
                $("#basecalcto").val(numInDecimal);
            }
            else if(optionto == "Hexdecimal") {
                var numInHex = numInDecimal.toString(16).toUpperCase();
                $("#basecalcto").val(numInHex);
            }
            else if(optionto == "Octal") {
                $("#basecalcto").val($("#basecalcfrom").val());
            }
            else if(optionto == "Binary") {
                var numInBinary = numInDecimal.toString(2);
                $("#basecalcto").val(numInBinary);
            }
        }
        else if(optionfrom == "Binary") {
            var numInDecimal = parseInt(num, 2);
            if(optionto == "Decimal") {
                $("#basecalcto").val(numInDecimal);
            }
            else if(optionto == "Hexdecimal") {
                var numInHex = numInDecimal.toString(16).toUpperCase();
                $("#basecalcto").val(numInHex);
            }
            else if(optionto == "Octal") {
                var numInOctal = numInDecimal.toString(8);
                $("#basecalcto").val(numInOctal);
            }
            else if(optionto == "Binary") {
                $("#basecalcto").val($("#basecalcfrom").val());
            }
        }
    });
    
    
});