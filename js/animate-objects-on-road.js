"use strict";
// opbygger vores datastruktur for bilerne i et array af objekter
const carInfo = [
  {
    className: "car1",
    carBrand: "Ford",
    carModel: "Mustang",
    releaseYear: 1974,
    color: "Red",
    fuelType: "Diesel",
  },
  {
    className: "car2",
    carBrand: "Bmw",
    carModel: "M5",
    releaseYear: 2020,
    color: "Sort",
    fuelType: "Elektrisk",
  },
  {
    className: "car3",
    carBrand: "Fiat",
    carModel: "500",
    releaseYear: 2004,
    color: "Grå",
    fuelType: "Benzin",
  },
  {
    className: "simoncar",
    carBrand: "Simon",
    carModel: "Klam",
    releaseYear: 2003,
    color: "Hudfarve",
    fuelType: "Faxe kondi BOOSTER",
  },
  {
    className: "tungcar",
    carBrand: "Tung",
    carModel: "Sahur",
    releaseYear: 2025,
    color: "Pølsefarve",
    fuelType: "Bombodillo krokodillo",
  },
];

// venter med at køre koden til DOM er loaded
document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("tooltip");
  const getRedCar = document.getElementById("redCar");
  const getBlueCar = document.getElementById("blueCar");
  const getPoliceCar = document.getElementById("policeCar");
  const sun = document.querySelector(".sun");
  const scene = document.querySelector(".scene");
  const simonCar = document.getElementById("simon");
  const tungcar = document.getElementById("tungtung");

  function showTooltip(html) {
    if (tooltip) {
      tooltip.innerHTML = html;
      tooltip.classList.add("is-visible");
      setTimeout(() => {
        tooltip.classList.remove("is-visible");
      }, 8000);
    }
  }

  // viser tooltip ved hover på biler
  carInfo.forEach((car) => {
    document.querySelectorAll("." + car.className).forEach((elem) => {
      elem.addEventListener("mouseover", () => {
        const carDetails = `
          <strong>${car.carBrand} ${car.carModel}</strong> <br> 
          Release Year: ${car.releaseYear} <br>
          Color: ${car.color} <br>
          Fuel Type: ${car.fuelType}
        `;
        showTooltip(carDetails);
      });
    });
  });

  // lydobjekter
  const soundRedCar = new Audio("sound/redcarsound.wav");
  const soundPoliceSiren = new Audio("sound/policecarsound.wav");
  const soundBlueCar = new Audio("sound/bluecarsound.wav");
  const soundSimonCar = new Audio("sound/simoncarsound.mp3");
  const soundTungCar = new Audio("sound/tungtungsound.mp3");

  // klik events
  if (getRedCar) {
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
});
