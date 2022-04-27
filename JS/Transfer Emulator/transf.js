let bo = document.getElementById('borigen');
let bd = document.getElementById('bdestino');
const boton = document.getElementById('transferir');
let saldo = document.getElementById('saldo');
let saldoini = document.getElementById('sinicial');
let saldofin = document.getElementById('sfinal');
let comision = document.getElementById('comision1');
let vr = document.getElementById('vtransf');

boton.addEventListener("click", operacion);

function operacion() {
  let banco_cliente = bo.value;
  let valor = parseInt(vr.value);
  const cuenta_cliente = true;
  let saldo_cliente = parseInt(saldo.value);
  let banco_destino = bd.value;
  const cuenta_destino = true;
  let hora = 19;

  if (cuenta_cliente && cuenta_destino) {
    if ((hora >= 9 && hora <= 12) || (hora >= 15 && hora <= 20)) {
      saldoini.innerHTML = 'Saldo incial: $ ' + saldo_cliente;
      if (banco_cliente == banco_destino) {
        let vr_comision = parseInt(0);
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
        let vr_comision = parseFloat(valor * 0.05);
        if ((vr_comision + valor) <= saldo_cliente) {
          comision.innerHTML = 'Valor comision transferencia: $ ' + vr_comision + 
          '</br> (Comision de traslado a otros bancos equivalente al 5%)';
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
