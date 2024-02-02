let A = [2, 3, 5, 7, 8]

let B = A.map((element, index) => {
  return {
    numero: element
  }
})

document.body.innerText = JSON.stringify(B) // console.log