

// Write your JavaScript code here!
//require('./scriptHelper.js')
//const { formSubmission } = require('./scriptHelper.js');
   // formSubmission()

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");



//const { formSubmission } = require("./scriptHelper");


window.addEventListener("load", function() {

let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        alert("All feilds required to continue.");
        event.preventDefault();
    }
    formSubmission;
})


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch().response.json;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       pickPlanet(listedPlanets).then(addDestinationInfo(response.json));
   })
   
});