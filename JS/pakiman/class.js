class Pakiman {
  constructor(n, v, a, t) {
    this.imagen = new Image();
    this.tipo = t;
    this.nombre = n;
    this.ataque = a;
    this.vida = v;
    this.imagen.src = imagenes[n];
  }
  hablar() {
    alert(this.nombre + "!!! " + this.nombre + "!!!");
  }
  mostrar() {
    showpkmn.innerHTML = `<h2><strong>  ${this.nombre}  </strong></h2>`
    showpkmn.appendChild(this.imagen);
    showpkmn.innerHTML += `<br>`
    showpkmn.innerHTML += `<strong>Vida: </strong>  ${this.vida}  </br>`
    showpkmn.innerHTML += `<strong>Ataque: </strong>  ${this.ataque}  </br>`
    showpkmn.innerHTML += `<strong>Tipo: </strong>  ${this.tipo}  </br>`
    showpkmn.innerHTML += `<strong> ${this.nombre} !!! ${this.nombre} !!! </strong> </p><hr/>`
  }
  mostrar1() {
    showpkmn.innerHTML += `<h2><strong>  ${this.nombre}  </strong></h2>`
    showpkmn.appendChild(this.imagen);
    showpkmn.innerHTML += `<br>`
    showpkmn.innerHTML += `<strong>Vida: </strong>  ${this.vida}  </br>`
    showpkmn.innerHTML += `<strong>Ataque: </strong>  ${this.ataque}  </br>`
    showpkmn.innerHTML += `<strong>Tipo: </strong>  ${this.tipo}  </br>`
    showpkmn.innerHTML += `<strong> ${this.nombre} !!! ${this.nombre} !!! </strong> </p><hr/>`
  }
}