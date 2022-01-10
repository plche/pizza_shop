function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas, tamanio) {
    let pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    pizza.tamanio = tamanio;
    return pizza;
}

function randomPizza() {
    const cortezas = ["estilo Chicago", "lanzada a mano", "estilo Margarita", "estilo Napolitana"];
    const tipoSalsas = ["tradicional", "marinara", "tomate", "barbacoa"];
    const tipoQuesos = ["mozzarella", "feta", "gorgonzola", "fontina", "parmesano"];
    const isalsas = ["pepperoni", "salchicha", "champiñones", "aceitunas", "albahaca", "anchoas"];
    const tamanios = ["pequeño", "familiar", "grande", "extra-grande"];
    const tipoCorteza = cortezas[Math.floor(Math.random() * cortezas.length)];
    const tipoSalsa = tipoSalsas[Math.floor(Math.random() * tipoSalsas.length)];
    let quesos = [];
    let salsas = [];
    const tamanio = tamanios[Math.floor(Math.random() * tamanios.length)];

    for (let i = 0; i <= Math.floor(Math.random() * tipoQuesos.length); i++) { // How many Quesos randomly
        let arr = tipoQuesos;
        for (let j = 0; j < arr.length; j++) { // To avoid repetitives Quesos choosen randomly, I'm sure a better way could be a While loop
            let k = Math.floor(Math.random() * arr.length);
            quesos.push(arr[k]);
            arr.splice(k, 1);
        }
    }

    for (let i = 0; i <= Math.floor(Math.random() * isalsas.length); i++) { // How many Salsas randomly
        let arr = isalsas;
        for (let j = 0; j < arr.length; j++) {  // To avoid repetitives Salsas choosen randomly, I'm sure a better way could be a While loop
            let k = Math.floor(Math.random() * arr.length);
            salsas.push(arr[k]);
            arr.splice(k, 1);
        }
    }

    let p5 = pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas, tamanio);
    console.log(p5);
}

let p1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"], "pequeño");
console.log(p1);
let p2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas"], "familiar");
console.log(p2);
let p3 = pizzaOven("estilo Margarita", "tomate", ["gorgonzola"], ["albahaca", "anchoas"], "grande");
console.log(p3);
let p4 = pizzaOven("estilo Napolitana", "barbacoa", ["mozzarella", "fontina", "parmesano"], ["pepperoni", "salchicha", "champiñones", "anchoas"], "extra-grande");
console.log(p4);
randomPizza();