let a = 6
let nome = "José"

let user = {
  nome: "José",
  idade: 20,
  telefone: "999999999",
  irmaos: [
    {
      nome: "João",
      idade: 16
    },
    {
      nome: "Laura",
      idade: 24
    }
  ]
}

document.body.innerText = user.irmaos[0].nome // console.log