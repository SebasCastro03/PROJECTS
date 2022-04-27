class Billete {
  constructor(v, c) {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
    this.imagen.src = imagenes[v];
  }
  imprimir() {
    txxt.appendChild(this.imagen);
  }
}

let imagenes = []
imagenes['100'] = '100.png';
imagenes['50'] = '50.png';
imagenes['20'] = '20.png';
imagenes['10'] = '10.png';

let caja = [];
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 6));
caja.push(new Billete(20, 7));
caja.push(new Billete(10, 6));
