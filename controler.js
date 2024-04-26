const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
const numbers2 = [1, 2, 3, 4, 5];
const filteredNumbers = numbers2.filter(number => number > 3);
console.log(filteredNumbers);

const dinosaurios = [
    { nombre: "Tyrannosaurus rex", tipo: "Carnívoro" },
    { nombre: "Triceratops", tipo: "Herbívoro" },
    { nombre: "Stegosaurus", tipo: "Herbívoro" },
    { nombre: "Velociraptor", tipo: "Carnívoro" },
    { nombre: "Brachiosaurus", tipo: "Herbívoro" },
    { nombre: "Ankylosaurus", tipo: "Herbívoro" },
    { nombre: "Pteranodon", tipo: "Volador" },
    { nombre: "Diplodocus", tipo: "Herbívoro" },
    { nombre: "Allosaurus", tipo: "Carnívoro" },
    { nombre: "Spinosaurus", tipo: "Carnívoro" }
];


const contenedor = document.getElementById('contenedor');

dinosaurios.forEach(dino => {
    const div = document.createElement('div');
    div.className = 'dinosaur';
    div.innerHTML = `<strong>Nombre:</strong> ${dino.nombre} <br> <strong>Profesión:</strong> ${dino.tipo} `;
    contenedor.appendChild(div);
});