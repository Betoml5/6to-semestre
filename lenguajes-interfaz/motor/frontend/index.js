const $root = document.getElementById("root");

$root.innerHTML = `
    <h1>Motor</h1>
    <p>Motor de la aplicación</p>
`;

setInterval(() => {
    fetch("http://192.168.1.76:3000/agua")
  .then((response) => response.text())
  .then((data) => {
    console.log(data);
  });
}, 1000);
