let A = [2, 3, 5, 7, 8]

let C = ["Olá", "Tudo bem", "Como vai", "Tudo certo", "Beleza"]

let B = C.filter((element) => {
  return element.length < 6
})

document.body.innerText = B // console.log