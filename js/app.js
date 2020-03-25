//#region Funciones
function simplificar(numerador, denominador) {
  let aux;

  while (numerador % denominador != 0) {
    aux = numerador % denominador;
    numerador = denominador;
    denominador = aux;
  }
  return denominador;
}

function resultado(numerador, denominador) {
  if (denominador != 0) {
    let divisor = simplificar(numerador, denominador);
    let num = numerador / divisor;
    let deno = denominador / divisor;

    console.log(`${numerador}/ ${denominador}`);
    console.log(
      `numerador : ${num} Denominador : ${deno}, divisor: ${divisor}`
    );
    $("#results-n5").val(num);
    $("#results-n6").val(deno);
  } else {
    alert("Demoninador debe ser diferente de 0!!!!");
  }
}

function sumar(n1, n2, n3, n4) {
  let num1 = n1 * n4;
  let num2 = n2 * n3;

  let numerador = num1 + num2;
  let denominador = n2 * n4;

  resultado(numerador, denominador);
  console.log("el resultado es : " + numerador + "/" + denominador);
  console.log(`n1 : ${n1}, n2: ${n2}, n3: ${n3}, n4: ${n4}`);
}

function restar(n1, n2, n3, n4) {
  let num1 = n1 * n4;
  let num2 = n2 * n3;

  let numerador = num1 - num2;
  let denominador = n2 * n4;

  resultado(numerador, denominador);
  console.log("el resultado es : " + numerador + "/" + denominador);
}

function multi(n1, n2, n3, n4) {
  let numerador = n1 * n3;
  let denominador = n2 * n4;

  resultado(numerador, denominador);
  console.log(`el resultado es ${numerador} / ${denominador}`);
}

function dividir(n1, n2, n3, n4) {
  let numerador = n1 * n4;
  let denominador = n2 * n3;
  resultado(numerador, denominador);
  console.log("el resultado es : " + numerador + "/" + denominador);
}

function calcular() {
  let operacion = parseInt($("#operaciones").val());
  let n1 = parseInt($("#first-n1").val());
  let n2 = parseInt($("#first-n2").val());
  let n3 = parseInt($("#second-n1").val());
  let n4 = parseInt($("#second-n2").val());

  switch (operacion) {
    case 1:
      sumar(n1, n2, n3, n4);
      break;
    case 2:
      restar(n1, n2, n3, n4);
      break;
    case 3:
      multi(n1, n2, n3, n4);
      break;
    case 4:
      dividir(n1, n2, n3, n4);
      break;
  }
}
//#endregion

$(document).ready(() => {
  $("#btn-calcular").click(e => {
    e.preventDefault();

    if (
      $("#first-n1").val() != "" &&
      $("#first-n2").val() != "" &&
      $("#second-n2").val() != "" &&
      $("#second-n2").val() != ""
    ) {
      calcular();
    } else {
      alert("Por favor, rellena todos los campos");
    }
  });
});

console.log("working");
