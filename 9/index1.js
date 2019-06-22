const URL = "https://trevadim.github.io/vue/data/data.json";
const header = document.querySelector("header");
const gallery = document.getElementById("gallery");


const setHeader = ({ cosmos, infoCosmos, infoFly }) => {
	header.innerHTML = `
		<h1>${cosmos}</h1>
		<h2>${infoCosmos}</h2>
		<p>${infoFly}</p>
	`;
};

const setSection = (planet => {

	let result = "";
		for (let i in planet) {
    
        result += `
			<div>
				<div>${planet.title}</div>
				<div>${planet.info}</div>
				<img class="img" src=${planet.url}>
			</div>
        `
	};
	gallery.innerHTML = result;
});


fetch(URL)
	.then(resolve => {
		return resolve.json();
	})
	.then(data => {
		setHeader(data.main);
		setSection(data.planets);
	console.log(data);
	})

	.catch(error => {
		console.dir(error);
	})