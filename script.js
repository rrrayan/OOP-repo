 /* Opdracht Objectgeorienteerd programmeren
    Informatica - Emmauscollege Rotterdam
 */

/* ******************************************************* */
/* instellingen om foutcontrole van je code beter te maken */
/* ******************************************************* */
///<reference path="p5.global-mode.d.ts" />
"use strict"


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
var xPosities;
var yPosities;
var speedX;
var speedY;
const BREEDTE = 20;



/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // initialiseer waarden
  xPosities = [192, 450, 800, 120, 75];               // midden van de breedte van het canvas
  yPosities = [182, 430, 700, 100, 45];              // midden van de hoogte van het canvas
  speedX = [2, 4, -3, -5, 1];      // random waarde tussen -5 en 5
  speedY = [5, -2, 3, -1, -4];      // 👆
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // zwarte achtergrond
  background(0, 0, 0);

  // teken
  noStroke;
  fill(255, 255, 255);
  rect(x, y, BREEDTE, BREEDTE);

  // update positie
  xPosities = xPosities + speedX;
  yPosities = yPosities + speedY;

  // stuiter evt. tegen de kanten
  if (x <= 0 || x + BREEDTE >= width) {
    speedX = speedX * -1;
  }

  if (y <= 0 || y + BREEDTE >= height) {
    speedY = speedY * -1;
  }

}
