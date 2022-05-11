let nombreUser = prompt("Ingresa tu nombre.");
const tasaAnual = 45.5;
let tasaMensual = tasaAnual / 12 / 100;
let capital;
let cantidadDeMeses;
let resultadoOperacion;
let interesesObtenidos;
let mesVencimiento;
let resultado;

// Funciones

const multiplicacion = (a, b) => a * b;
const suma = (a, b) => a + b;
const interesElevado = (a, b) => a ** b;

// Arrays

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
let hoy = new Date();
let mesActual = meses[hoy.getMonth()];

// Regsitro de datos ingresados por array

const registro = [];

// Recarga Web

const recargarNavegador = document.getElementById("recargarNavegador");

recargarNavegador.addEventListener("click", () => {
  location.reload();
});

// DOM

function saludoMomento() {
  hora = hoy.getHours();

  if (hora >= 7 && hora < 12) {
    saludoHora = "Buenos Días";
  }

  if (hora >= 12 && hora < 18) {
    saludoHora = "Buenas Tardes";
  }

  if (hora >= 18 && hora < 24) {
    saludoHora = "Buenas Noches";
  }

  if (hora >= 0 && hora < 7) {
    saludoHora = "Buenas Noches";
  }

  let saludoInicial = document.getElementById("saludoInicial");
  saludoInicial.innerHTML = `<h2>Hola <strong>${nombreUser}</strong>, ${saludoHora}!!</h2>`;
}

let userSesion = document.getElementById("userSesion");
userSesion.innerHTML = `<p>${nombreUser}</p>`;

// DOM Plazo fijo tradicional

let camposPlazoFijo = document.getElementById("camposPlazoFijo");
camposPlazoFijo.addEventListener("submit", validarCamposPlazoFijoTradicional);

function validarCamposPlazoFijoTradicional(e) {
  e.preventDefault();
  let camposPlazoFijo = e.target;

  capital = document.querySelector("#monto").value;
  cantidadDeMeses = document.querySelector("#meses").value;

  resultadoOperacion = multiplicacion(
    capital,
    suma(1, multiplicacion(tasaMensual, cantidadDeMeses))
  );
  
  interesesObtenidos = resultadoOperacion - capital;

  mesVencimiento = hoy.setMonth(hoy.getMonth() + cantidadDeMeses);

  registro.push(
    nombreUser,
    capital,
    cantidadDeMeses,
    interesesObtenidos
  );
  console.log(registro);

  let resultado1 = document.getElementById("resultado1");
  resultado1.innerHTML = `<p>La TNA vigete del mes ${mesActual} es ${tasaAnual}%</p>
                <p>Ingresaste de capital: <strong>$${capital}</strong></p>
                <p>Con una TNA <strong>${tasaAnual}%</strong></p>
                <p>A ${cantidadDeMeses} meses</p>
                <p>El capital obtenido en ese tiempo es <strong>$${resultadoOperacion}</strong></p>
                <p>La fecha de vencimiento es el <strong>${hoy.getDate()}/${hoy.getMonth() + 1}/${hoy.getFullYear()}</strong></p>
                <p>Los intereses obtenidos en esos ${cantidadDeMeses} meses es de <strong>$${interesesObtenidos}</strong></p><br>`;
}

// DOM Plazo fijo con interes compuesto

let camposPlazoFijoCompuesto = document.getElementById("camposPlazoFijoCompuesto");
camposPlazoFijoCompuesto.addEventListener("submit", validarCamposPlazoConInteresCompuesto);

function validarCamposPlazoConInteresCompuesto(e) {
  e.preventDefault();
  let camposPlazoFijoCompuesto = e.target;

  capital = document.querySelector("#monto2").value;
  cantidadDeMeses = document.querySelector("#meses2").value;

  resultadoOperacion = multiplicacion(
    capital,
    interesElevado(suma(1, tasaMensual), cantidadDeMeses)
  );
  interesesObtenidos = resultadoOperacion - capital;

  mesVencimiento = hoy.setMonth(hoy.getMonth() + cantidadDeMeses);

  let resultado2 = document.getElementById("resultado2");
  resultado2.innerHTML = `<p>La TNA vigete del mes ${mesActual} es ${tasaAnual}%</p>
                    <p>Ingresaste de capital: <strong>$${capital}</strong></p>
                    <p>Con una TNA <strong>${tasaAnual}%</strong></p>
                    <p>A ${cantidadDeMeses} meses</p>
                    <p>El capital obtenido en ese tiempo es <strong>$${resultadoOperacion}</strong></p>
                    <p>La fecha de vencimiento es el <strong>${hoy.getDate()}/${hoy.getMonth() + 1}/${hoy.getFullYear()}</strong></p>
                    <p>Los intereses obtenidos en esos ${cantidadDeMeses} meses es de <strong>$${interesesObtenidos}</strong></p>
                    <h6>El interés compuesto es aquel que se va sumando al capital inicial y sobre el que se van generando nuevos intereses.</h6>`;

  registro.push(
    nombreUser,
    capital,
    cantidadDeMeses,
    interesesObtenidos
  );
  console.log(registro);
}