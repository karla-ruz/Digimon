const listaDigimon = document.getElementById("listaDigimon");

fetch("https://digimon-api.vercel.app/api/digimon")
  .then(response => response.json())
  .then(digimon => {
    digimon.forEach(digimon => {
      const ul = document.createElement("ul");
      const img = document.createElement("img");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");

      img.src = digimon.img;
      h2.textContent = digimon.name;
      p.textContent = digimon.level;

      ul.appendChild(img);
      ul.appendChild(h2);
      ul.appendChild(p);

      listaDigimon.appendChild(ul);
    });
  })
  .catch(error => {
    console.error(error);
  });




  let formDigimon = document.getElementById("formDigimon");
  formDigimon.addEventListener("submit", function (event){
    event.preventDefault();
    getDigimon(nombreDigimon.value);
  });
  

function getDigimon(nameDigimon){
  let urlBase = "https://digimon-api.vercel.app/api/digimon/name/";
  fetch(urlBase + nameDigimon)
  .then ((response) => response.json())
        .then ((digimon) => {
        console.log (digimon);
        cargarDigimon(digimon);
        })

        .catch(error => {
            console.log (error);
        });
}



function cargarDigimon(digimon) {
  if (digimon.length > 0) {
    let Digimon = digimon[0];

    let nameDigimon = document.getElementById("nameDigimon");
    nameDigimon.innerText = Digimon.name;

    let levelDigimon = document.getElementById("levelDigimon");
    levelDigimon.innerText = Digimon.level;

    let imgDigimon = document.getElementById("imgDigimon");
    imgDigimon.src = Digimon.img;
    imgDigimon.alt = Digimon.name;
  }
}
