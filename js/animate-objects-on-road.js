"use strict";

//Hent DOM Elementer
const getRedCar = document.getElementById("redCar");
const getBlueCar = document.getElementById("blueCar");
const getPoliceCar = document.getElementById("policeCar");
const sun = document.querySelector(".sun");
const scene = document.querySelector(".scene");
const simonCar = document.getElementById("simon");
const tungcar = document.getElementById("tungtung");

// lydobjekter
const soundRedCar = new Audio("sound/redcarsound.wav");
//soundRedCar.src = "../sound/redcarsound.wav";
const soundPoliceSiren = new Audio("sound/policecarsound.wav");
//soundPoliceSiren.src = "../sound/policecarsound.wav";
const soundBlueCar = new Audio("sound/bluecarsound.wav");
//soundBlueCar.src = "../sound/bluecarsound.wav";
const soundSimonCar = new Audio("sound/simoncarsound.mp3");

const soundTungCar = new Audio("sound/tungtungsound.mp3");

// Funktioner til animationer og lyd
if (getRedCar) {
  //   getRedCar.style.cursor = "pointer"; lavet i css med id #redCar også cursor:pointer
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

// skift mellem dag og nat
if (sun && scene) {
  sun.addEventListener("click", () => {
    scene.classList.toggle("night");
  });
}

if (simonCar) {
  simonCar.style.cursor = "pointer";
  simonCar.addEventListener("click", () => {
    soundSimonCar.play();
  });
}

if (tungcar) {
  tungcar.style.cursor = "pointer";
  tungcar.addEventListener("click", () => {
    soundTungCar.play();
  });
}
