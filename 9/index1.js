'use strict';

const URL = "https://trevadim.github.io/vue/data/data.json";
const header = document.querySelector("header");
const gallery = document.getElementById("gallery");


const setHeader = ({cosmos, infoCosmos, infoFly}) => {
    header.innerHTML = `
		<h1>${cosmos}</h1>
		<p>${infoCosmos}</p>
		<p>${infoFly}</p>
	`;
};

const setSection = ((planets) => {
    let result = "";

    for (let i in planets) {
        result += `
			<div class="planets">
				<h2>${planets[i].title}</h2>
				<div class="planet">
					<div class="text">${planets[i].info}</div>
					<img class="img" src=${planets[i].url}>
				</div>
			</div>
        `
    }

    gallery.innerHTML = result;
});


fetch(URL)
    .then((resolve) => resolve.json())
    .then((data) => {
        setHeader(data.main);
        setSection(data.planets);
    })
    .catch(function (error) {
        console.dir(error);
    });