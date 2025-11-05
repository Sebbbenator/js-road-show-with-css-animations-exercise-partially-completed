"use strict";

//Hent DOM Elementer
const getRedCar = document.getElementById("redCar");
const getBlueCar = document.getElementById("blueCar");
const getPoliceCar = document.getElementById("policeCar");
const sun = document.querySelector(".sun");
const scene = document.querySelector(".scene");

// lydobjekter
const soundRedCar = new Audio("sound/redcarsound.wav");
//soundRedCar.src = "../sound/redcarsound.wav";
const soundPoliceSiren = new Audio("sound/policecarsound.wav");
//soundPoliceSiren.src = "../sound/policecarsound.wav";
const soundBlueCar = new Audio("sound/bluecarsound.wav");
//soundBlueCar.src = "../sound/bluecarsound.wav";

// Funktioner til animationer og lyd
if (getRedCar) {
  getRedCar.style.cursor = "pointer";
  getRedCar.addEventListener("click", () => {
     soundRedCar.play();
  });
}   

if (getBlueCar) {
  getBlueCar.style.cursor = "pointer";
  getBlueCar.addEventListener("click", () => {
    soundBlueCar.play();
  });
}   
if (getPoliceCar) {
  getPoliceCar.style.cursor = "pointer";
  getPoliceCar.addEventListener("click", () => {
    soundPoliceSiren.play();
  });
}
