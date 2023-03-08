// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random

const dogId = document.querySelector(".dogId");
const dogAge = document.querySelector(".dogAge");
const dogRegistry = document.querySelector(".dogRegistry");


const idValues = [
  { value: 21024 },
  { value: 14567 },
  { value: 87391 },

];
const ageValues = [
  { value: "3 Years" },
  { value: "4 Years" },
  { value: "5 Years" },

];
const registryValues = [
  { value: 123 },
  { value: 456 },
  { value: 789 },

];

const dogImage = document.getElementById("dogsAPI");

const viewMoreButton = document.querySelector(".btn-primary");

viewMoreButton.addEventListener("click", () => {

  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {

      dogImage.src = data.message;

      const randomId = idValues[Math.floor(Math.random() * idValues.length)].value;
      const randomAge = ageValues[Math.floor(Math.random() * ageValues.length)].value;
      const randomRegistry = registryValues[Math.floor(Math.random() * registryValues.length)].value;

      dogId.textContent = randomId;
      dogAge.textContent = randomAge;
      dogRegistry.textContent = randomRegistry;
    })
    .catch(error => {
      console.error("Une erreur s'est produite :", error);
    });
});
