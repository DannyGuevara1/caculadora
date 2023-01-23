let resultado = 0;
let operacion = '';
let valorAnterior = 0;
const spanResultado = document.getElementById('resultado');
const btnResolver = document.getElementById('resolver');
const btnValores = document.querySelectorAll('.botones');
const btnAc = document.getElementById('limpiar');
btnValores.forEach((boton) => {
  boton.addEventListener('click', () =>{
    operacion += boton.value;
  });
});
function evalua(params) {
  return new Function('return ' + params)();
}
/*
  resuelve la cadena de texto que contiene la operaciones
*/
function fResolver() {
  valorAnterior = evalua(operacion);
  resultado = valorAnterior;
  operacion = valorAnterior.toString();
  console.log(operacion);
  return spanResultado.innerHTML = resultado;
}
function limpiar() {
  operacion = '';
  resultado = 0;
  spanResultado.innerHTML = 0;
};
btnAc.addEventListener('click', limpiar);
btnResolver.addEventListener('click', fResolver);
