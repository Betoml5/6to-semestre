const enanitosLista = document.querySelector("#enanitos");

const enanitos = [
  "Bashful",
  "Doc",
  "Dopey",
  "Grumpy",
  "Happy",
  "Sleepy",
  "Sneezy",
];

enanitos.forEach((enanito) => {
  const item = document.createElement("li");
  item.textContent = enanito;
  enanitosLista.appendChild(item);
  //   enanitosLista.innerHTML += `<li>${enanito}</li>`;
});
