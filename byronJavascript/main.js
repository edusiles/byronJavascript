import axios from 'axios'

// axios.post('https://api.github.com/login', {
//    email: "teste@email.com",
//    password: "asdasdas"
// }, {
//    headers: {

//    }
// })
//    .then(response => {
//       console.log(response)
//    })
//    .catch(err => {
//       console.log(err)
//    })
//    .finally(() => {
//       console.log("Terminou!")
//    })

async function getUser() {
   try {
      const response = await axios.get('https://api.github.com/users/edusiles', {
         headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
         }
      });
      console.log(response);
   } catch(error) {
      console.error(error);
   }
}

getUser();