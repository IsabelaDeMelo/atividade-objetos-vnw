let academia = ["agachamento", "leg press", "levantamento terra", "hack", "smith"]
console.log(academia)

academia.unshift("bulgaro") // adicionar no primeiro lugar
console.log(academia)

academia.pop() // remover o último item
console.log(academia)

academia.splice(5, 2, "passada", "afundo") // adicionando dois itens no fim
console.log(academia)

academia.shift() // removendo o primeiro item
console.log(academia)

let numbers = [7,5,6,3,8,9,2,1,4] // colocando os números em ordem
numbers.sort()
console.log(numbers)

let aboutMe = { // objeto com 3 propriedades sobre mim
    nome: "Isabela de Melo",
    idade: 23,
    altura: 1.67
}

aboutMe.frutaPreferida = "banana" // adicionando uma propriedade nova
console.log(aboutMe)

delete aboutMe.altura // removenco uma propriedade
console.log(aboutMe)

console.log(aboutMe.nome)
console.log(aboutMe.idade)
console.log(aboutMe.frutaPreferida)

let cadastro = [ {
    nome: "Isabela",
    idade: 23,
    telefone: "(00) 0000-0000",
    amigos: ["Nícolas", "Julia", "Daniela", "Luis", "Caio"]
},
    { nome: "Thiago",
    idade: 22,
    telefone: "(11) 1111-1111",
    amigos: ["Ariel", "Luan", "Vinicius", "Erick", "Marison"]
}, 
    {nome: "Sophie",
    idade: 05,
    telefone: "(22) 2222-2222",
    amigos: ["Isabela", "Thiago", "Raquel", "Alex", "Rafaela"]
},
    {nome: "Raquel",
    idade: 50,
    telefone: "(33) 3333-3333",
    amigos: ["Rafaela", "Rodrigo", "Isabela", "Thiago", "Sophie"]
}, 
    { nome: "Luna",
    idade: 20,
    telefone: "(44) 4444-4444",
    amigos: ["Vitoria", "Leila", "Beatriz", "Deborah", "Laelson"]
}
]

console.log(cadastro[0].amigos[1])
console.log(cadastro[1].amigos[3])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[2])
console.log(cadastro[4].amigos[4])