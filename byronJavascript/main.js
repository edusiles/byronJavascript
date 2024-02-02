// Promises

// fetch('https://api.github.com/users/edusiles')
//    .then(response => {
//       return response.json()
//    })
//    .then(body => {
//       console.log(body)
//    })
//    .catch(err => {
//       console.log(err)
//    })
//    .finally(() => {
//       console.log("Terminado!")
//    })

async function buscaPorDados() {
   try {
      let response = await fetch('https://api.github.com/users/edusiles')
      let body = await response.json()
   
      console.log(body)
   } catch(err) {
      console.log(err)
   } finally {
      console.log("Terminou")
   }
}

buscaPorDados()