// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const div = document.getElementById("missionTarget");
    div.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance} </li>
            <li>Number of Moons: ${moons} </li>
        </ol>
        <img src="${imageUrl}">`
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    else if (isNaN(testInput) === true) {
        return "Not a Number";
    }
    else {
        return "Is a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot.value) === "Not a Number") {
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch!`;
    }
    if (validateInput(copilot.value) === "Not a Number") {
        document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot.value} is ready for launch!`;
    }
    if (validateInput(fuelLevel.value) === "Is a Number" && fuelLevel.value < 10000) {
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel Level too Low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for launch";
        document.getElementById("launchStatus").style.color = "red";
    }
    if (validateInput(cargoLevel.value) === "Is a Number" && cargoLevel.value > 10000) {
        list.style.visibility = "visible";
        document.getElementById("cargoLevel").innerHTML = "Cargo Mass too Heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for launch";
        document.getElementById("launchStatus").style.color = "#C7254E";
    }
    if (fuelLevel.value <= 10000 && cargoLevel.value >= 10000) {
        document.getElementById("launchStatus").style.color = "#419f6a";
        document.getElementById("launchStatus").innerHTML = "Shuttle Ready for launch";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length)
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
