let bo = document.getElementById('bOrigen');
let bd = document.getElementById('bDestino');
const boton = document.getElementById('transferir');
let saldo = document.getElementById('saldo');
let saldoIni = document.getElementById('sInicial');
let saldoFin = document.getElementById('sFinal');
let comision = document.getElementById('comision1');
let vr = document.getElementById('vTransf');

boton.addEventListener("click", operacion);

function operacion() {
  let bancoCliente = bo.value;
  let valor = parseInt(vr.value);
  const cuentaCliente = true;
  let saldoCliente = parseInt(saldo.value);
  let bancoDestino = bd.value;
  const cuentaDestino = true;
  let hora = 19;

  if (cuentaCliente && cuentaDestino) {
    if ((hora >= 9 && hora <= 12) || (hora >= 15 && hora <= 20)) {
      saldoIni.innerHTML = 'Saldo incial: $ ' + saldoCliente;
      if (bancoCliente == bancoDestino) {
        let vrComision = parseInt(0);
        if ((vrComision + valor) <= saldoCliente) {
          comision.innerHTML = 'Valor comision transferencia: $ ' + vrComision;
          saldoCliente -= vrComision + valor;
          saldoFin.innerHTML = 'Saldo final: $ ' + saldoCliente;
        }
        else if ((vrComision + valor) > saldoCliente) {
          alert('SALDO INSUFICIENTE');
        }
      }
      else {
        let vrComision = parseFloat(valor * 0.05);
        if ((vrComision + valor) <= saldoCliente) {
          comision.innerHTML = 'Valor comision transferencia: $ ' + vrComision + 
          '</br> (Comision de traslado a otros bancos equivalente al 5%)';
          saldoCliente -= vrComision + valor;
          saldoFin.innerHTML = 'Saldo final: $ ' + saldoCliente;
        }
        else if ((vrComision + valor) > saldoCliente) {
          comision.innerHTML = 'Valor comision transferencia: $ ' + vrComision + 
          '</br> (Comision de traslado a otros bancos equivalente al 5%)';
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
