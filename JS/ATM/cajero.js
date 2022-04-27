let saldo = document.getElementById('sld');
let txxt = document.getElementById('txt');
const button = document.getElementById('boton');
button.addEventListener('click', mostrar);
let papeles, divi, dinero;
var saldo1 = parseInt(0);
let entregado = [];

for (let xx of caja) {
  var saldo1 = saldo1 + (xx.valor * xx.cantidad);
  saldo.innerHTML = 'Dinero disponible en cajero : $ ' + saldo1;
}

function mostrar() {
  let dibujar = [];
  let valorr = document.getElementById('txtDinero');
  dinero = parseInt(valorr.value);
  for (let b of caja) {
    var saldo1 = parseInt(0);
    if (dinero > 0) {
      divi = Math.floor(dinero / b.valor);
      if (divi > b.cantidad) {
        papeles = b.cantidad;
      } else {
        papeles = divi;
      }
      b.cantidad = b.cantidad - papeles;
      for (let i = 0; i < papeles; i++) {
        dibujar.push(new Billete(b.valor, 1));
      }
      entregado.push(new Billete(b.valor, papeles));
      dinero -= (b.valor * papeles);
    }
    for (let xx of caja) {
      var saldo1 = saldo1 + (xx.valor * xx.cantidad);
      saldo.innerHTML = 'Dinero disponible en cajero : $ ' + saldo1;
    }
  }

  if (dinero == 0) {
    // for (let n of entregado) {
    //   if (n.cantidad > 0) {
    //     txxt.innerHTML += n.cantidad + ' billetes de $' + n.valor + '<br/>';
    txxt.innerHTML += '<strong>Se ha entregado: </strong></br>';
    for (let y of dibujar) {
      y.imprimir();
    }
    txxt.innerHTML += '<hr/>'
  } else if (dinero > 0) {
    txxt.innerHTML = "Cajero no cuenta con el dinero necesario.";
  }
}
