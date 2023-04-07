const btnAdd = document.querySelector("#btnAdd");
const container = document.querySelector("#container");
const cleanBtn = document.querySelector("#cleanBtn");
const $list = document.querySelector("#list");
const listInput = document.querySelector("#listinput");

const cards = [];

btnAdd.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;

  const card = `
    <div class="card">
        <h2>${title}</h2>
        <p>${description}</p>
        <button onclick="deleteComponent()">Eliminar</button>
    </div>
    `;
  cards.push({
    id: cards.length,
    item: card,
  });
  console.log(cards);
  container.innerHTML += card;
});

function deleteComponent(card) {
  cards.filter((item) => item.id !== card.id);
}
function cleanContainer() {
  container.innerHTML = "";
}

function addItemsToList() {
  if (listInput !== "") {
    const item = `<li>${listInput.value} <button>Eliminar</button></li>`;
    $list.innerHTML += item;
  }
}

function deleteItemFromList(item) {
  $list.removeChild(item);
}

$list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    deleteItemFromList(e.target.parentNode);
  }
});

// const obs = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log("Entró");
//     } else {
//       console.log("Salió");
//     }
//   });
// });
