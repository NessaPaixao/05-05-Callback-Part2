let lista = document.querySelector("ul")
let corpo = document.querySelector("body")

let frutas = [
    {nome: "Banana"},
    {nome: "Morango"},
    {nome:"Melancia"}
]

let imprimirFrutas = (cor) =>{
    for(let fruta of frutas){
        lista.innerHTML += `<li>${fruta.nome}</li>`
    }
    corpo.style.backgroundColor = cor
}

let adicionarFruta = (callback) =>{
    setTimeout(() => {
        frutas.push({nome: "Ameixa"});
        callback("magenta");
    }, 1000);
}

adicionarFruta(imprimirFrutas);