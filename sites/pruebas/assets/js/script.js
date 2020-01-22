/* function addDisplay(){
    document.getElementById("h1").className = "display-1";
}

function deleteDisplay(){
    document.getElementById("h1").className = "display-0";
}

var Num1 = parseFloat(document.getElementById("num1").value);

Num1.addEventListener('keyup',Num1Update);

var Num2 = parseFloat(document.getElementById("num2").value);

function calculo(){
    document.getElementById("resultado").textContent = Num1 + Num2;
}

function limpiar(){
    document.getElementById("resultado").textContent = "";
    document.getElementById("num1").value = parseFloat(0);
    document.getElementById("num2").value = parseFloat(0);
} */


// $("p").hide(800)

$(document).ready(function(){

    /* $(".p2").mouseenter(
        function(){
            $(this).addClass("p2-display");
    });

    $(".p2").mouseleave(
        function(){
            $(this).removeClass("p2-display");
        }
    ) */

    $("#btn-add-p2").click(
        function(){
            $(".p2").addClass("p2-display");
        }
    );

    $("#btn-remove-p2").click(
        function(){
            $(".p2").removeClass("p2-display");
        }
    );

});