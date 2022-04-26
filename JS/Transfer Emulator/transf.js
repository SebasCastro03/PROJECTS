var bo = document.getElementById('borigen');
var bd = document.getElementById('bdestino');
var boton = document.getElementById('transferir');
var saldo = document.getElementById('saldo');
var saldoini = document.getElementById('sinicial');
var saldofin = document.getElementById('sfinal');
var comision = document.getElementById('comision1');
var vr = document.getElementById('vtransf');

boton.addEventListener("click", operacion);

function operacion() {
  var banco_cliente = bo.value;
  var valor = parseInt(vr.value);
  var cuenta_cliente = true;
  var saldo_cliente = parseInt(saldo.value);
  var banco_destino = bd.value;
  var cuenta_destino = true;
  var hora = 19;

  if (cuenta_cliente && cuenta_destino) {
    if ((hora >= 9 && hora <= 12) || (hora >= 15 && hora <= 20)) {
      saldoini.innerHTML = 'Saldo incial: $ ' + saldo_cliente;
      if (banco_cliente == banco_destino) {
        var vr_comision = parseInt(0);
        comision.innerHTML = 'Valor comision transferencia: $ ' + vr_comision;
        if ((vr_comision + valor) <= saldo_cliente) {
          saldo_cliente -= vr_comision + valor;
          saldofin.innerHTML = 'Saldo final: $ ' + saldo_cliente;
        }
        else if ((vr_comision + valor) > saldo_cliente) {
          alert('SALDO INSUFICIENTE');
        }
      }
      else {
        var vr_comision = parseFloat(valor * 0.05);
        comision.innerHTML = 'Valor comision transferencia: $ ' + vr_comision + 
        '</br> (Comision de traslado a otros bancos equivalente al 5%)';
        if ((vr_comision + valor) <= saldo_cliente) {
          saldo_cliente -= vr_comision + valor;
          saldofin.innerHTML = 'Saldo final: $ ' + saldo_cliente;
        }
        else if ((vr_comision + valor) > saldo_cliente) {
          alert('SALDO INSUFICIENTE');
        }
      }
    }
    else {
      alert("Recuerde que el horario de atencion es de 9-12 y 15-20");
    }
  }
  else {
    alert("error en cuentas asociadas");
  }
}
