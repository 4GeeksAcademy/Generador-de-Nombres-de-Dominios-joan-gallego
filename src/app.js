/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

// Definir listas de palabras
const pronombres = ["mi", "tu", "su", "nuestro"];
const adjetivos = ["gran", "mejor", "nuevo", "genial", "increible"];
const sustantivos = ["sitio", "blog", "negocio", "proyecto", "empresa"];
const extensiones = [".com", ".net", ".org", ".io"];

// Función para generar combinaciones de dominios
function generarDominios() {
  const dominios = [];

  for (const pronombre of pronombres) {
    for (const adjetivo of adjetivos) {
      for (const sustantivo of sustantivos) {
        for (const extension of extensiones) {
          dominios.push(`${pronombre}${adjetivo}${sustantivo}${extension}`);
        }
      }
    }
  }

  return dominios;
}

// Generar lista de dominios
const dominiosGenerados = generarDominios();

console.log("=== Dominios Generados ===");

if (Array.isArray(dominiosGenerados)) {
  console.log("Total de dominios: " + dominiosGenerados.length + "\n");
  console.log(dominiosGenerados.join("\n"));
} else {
  console.error("Error: dominiosGenerados no es un array."); // ❌ Error corregido (antes decía "generarDominios")
}
