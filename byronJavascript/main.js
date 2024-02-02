let A = [2, 3, 5, 7, 8, 20]

let C = ["Olá", "Tudo bem", "Como vai", "Tudo certo", "Beleza"]

let teste = A.some((element) => {
  return element > 10
})

document.body.innerText = teste // console.log