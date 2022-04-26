var showpkmn = document.getElementById('show');
var buscar = document.getElementById("boton");

var imagenes = [];
imagenes["Squirtle"] = "squirtle.png";
imagenes["Charmander"] = "charmander.png";
imagenes["Bulbasaur"] = "bulbasaur.png";
imagenes["Pikachu"] = "pikachu.png";

var coleccion = [];
coleccion.push(new Pakiman("Squirtle", 100, 30, "Agua"));
coleccion.push(new Pakiman("Charmander", 80, 50, "Fuego"));
coleccion.push(new Pakiman("Bulbasaur", 120, 40, "Planta"));
coleccion.push(new Pakiman("Pikachu", 110, 50, "Electrico"));

buscar.addEventListener("click", mostrar1);

function mostrar1() {
  var name = document.getElementById("nombre1");
  for (var pkmn of coleccion) {
    if (pkmn.nombre == name.value) {
      pkmn.mostrar();
    }
    else if ("" == name.value) {
      pkmn.mostrar1();
    }
  }
}
