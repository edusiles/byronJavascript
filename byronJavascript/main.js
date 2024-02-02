let A = [2, 3, 5, 7, 8, 20]

let B = A.reduce((anterior, atual) => {
  return anterior + atual
}, 1)
 
document.body.innerText = B // console.log