/*---JAVASCRIPT DOCUMENT---*/
let house = {
	exterior: "brick walls",
	roof: "solar panels",
	bedrooms: 3,
	bathrooms: 2,
	sqft: 1800,
	balcony: true
}

let neighborhood = [
	house,
	{
		exterior: "wood",
		roof: "modern tiles",
		bedrooms: 5,
		bathrooms: 3,
		sqft: 1900,
		balcony: true
	},
	{
		exterior: "slate",
		roof: "straws",
		bedrooms: 1,
		bathrooms: 1,
		sqft: 600,
		balcony: true
	}
]

for(let i=0; i < neighborhood.length; i++) {
	const body = document.querySelector("body")
	build(neighborhood[i], body)
	let divider = document.createElement("p")
	divider.innerHTML = "--------------"
	body.appendChild(divider)
	
}

function build(structure, body) {
	for (let key in house){
		//console.log("Key: ", key, " value: ", house[key])//

		//---create a nice paragraph---//
		let p = document.createElement("p")
		p.innerHTML = key + ": " + structure[key]

		//---append it to the body---//
		body.appendChild(p);	
	}
}
