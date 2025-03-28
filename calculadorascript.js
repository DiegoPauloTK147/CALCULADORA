function add1() {
    let input = document.getElementById("meuInput");
    input.value += "1";
}

function add2() {
    let input = document.getElementById("meuInput");
    input.value += "2";
}

function add3() {
    let input = document.getElementById("meuInput");
    input.value += "3";
}
function add4() {
    let input = document.getElementById("meuInput");
    input.value += "4";
}
function add5() {
    let input = document.getElementById("meuInput");
    input.value += "5";
}

function add6() {
    let input = document.getElementById("meuInput");
    input.value += "6";
}

function add7() {
    let input = document.getElementById("meuInput");
    input.value += "7";
}

function add8() {
    let input = document.getElementById("meuInput");
    input.value += "8";
}

function add9() {
    let input = document.getElementById("meuInput");
    input.value += "9";
}

function add0() {
    let input = document.getElementById("meuInput");
    input.value += "0";
}

function clean() {
    let input = document.getElementById("meuInput").value = "";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        clean();
    }
});


function add() {
    let input = document.getElementById("meuInput");
    input.value += "+";
}

function sub() {
    let input = document.getElementById("meuInput");
    input.value += "-";
}

function mult() {
    let input = document.getElementById("meuInput");
    input.value += "*";
}

function divd() {
    let input = document.getElementById("meuInput");
    input.value += "/";
}

function resultBrabo() {
    let input = document.getElementById("meuInput");
    let expressao = input.value;
    try {
        let resultado = new Function("return " + expressao)();
        input.value = resultado;
    } catch (erro) {
        input.value = "Erro";
    }




}