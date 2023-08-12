// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    myFetch().then(function (json) {
        const div = document.getElementById("missionTarget");
        name = json.name;
        diameter = json.diameter;
        star = json.star;
        distance = json.distance;
        moons = json.moons;
        imageUrl = json.image;

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

    })
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
    list = document.getElementById("faultyItems")
    pilot = document.querySelector("input[name=pilotName]");
    copilot = document.querySelector("input[name=copilotName]");
    fuelLevel = document.querySelector("input[name=fuelLevel]");
    cargoLevel = document.querySelector("input[name=cargoMass]");

    //list.style.visibility = "visible"

    if (validateInput(pilot.value) === "Not a Number") {
        document.getElementById("pilotStatus").innerHTML += `${pilotName.value}`;
    }
    if (validateInput(copilot.value) === "Not a Number") {
        document.getElementById("copilotStatus").innerHTML += `${copilotName.value}`;
    }
    if (validateInput(fuelLevel.value) === "Is a Number" && validateInput(fuelLevel.value) < 10000) {
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel Level too Low for Launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
    }
    if (validateInput(cargoLevel.value) === "Is a Number" && validateInput(cargoLevel.value) >= 10000) {
        list.style.visibility = "visible";
        document.getElementById("cargoLevel").innerHTML = "Cargo Mass too Heavy for Launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "#C7254E";
        //document.getElementById("fuelStatus").innerHTML += `${fuelLevel.value}`
    }
    if (validateInput(fuelLevel.value) <= 10000 && validateInput(cargoLevel.value) >= 10000) {
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
