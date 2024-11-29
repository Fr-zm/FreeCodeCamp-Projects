const input = document.getElementById("search-input")
const btn = document.getElementById("search-button")
const nam = document.getElementById("pokemon-name")
const id = document.getElementById("pokemon-id")
const weight = document.getElementById("weight")
const height = document.getElementById("height")
const type = document.getElementById("types")
const hp = document.getElementById("hp")
const att = document.getElementById("attack")
const def = document.getElementById("defense")
const spatt = document.getElementById("special-attack")
const spdef = document.getElementById("special-defense")
const spe = document.getElementById("speed")
const imgDiv = document.getElementById("img-div")

btn.addEventListener("click", getPokemon)

async function getPokemon() {
    try {
        const poke = input.value.toLowerCase().trim()
        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${poke}`);
        const data = await response.json();
        const typePoke = data.types.map(typeInfo => typeInfo.type.name)[0].toUpperCase()
        const getStat = (statName) => data.stats.find(stat => stat.stat.name === statName);


        nam.innerText = ``
        id.innerText = ``
        weight.innerText = ``
        height.innerText = ``
        type.innerText = ``
        hp.innerText = ``
        att.innerText = ``
        def.innerText = ``
        spatt.innerText = ``
        spdef.innerText = ``
        spe.innerText = ``
        imgDiv.innerHTML = ``


        data.types.forEach(typeInfo => {
            const typeElement = document.createElement("span");
            typeElement.innerText = typeInfo.type.name.toUpperCase();
            type.appendChild(typeElement);
        });

        nam.innerText = `${data.name}`
        id.innerText = `${data.id}`
        weight.innerText = `${data.weight}`
        height.innerText = `${data.height}`
        hp.innerText = `${getStat("hp").base_stat}`
        att.innerText = `${getStat("attack").base_stat}`
        def.innerText = `${getStat("defense").base_stat}`
        spatt.innerText = `${getStat("special-attack").base_stat}`
        spdef.innerText = `${getStat("special-defense").base_stat}`
        spe.innerText = `${getStat("speed").base_stat}`
        imgDiv.innerHTML = `<img id="sprite" src="${data.sprites.front_default}">`



    } catch (err) {
        alert("Pokémon not found")
        console.log(err)
    }

}