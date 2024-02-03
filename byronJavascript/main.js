import axios from 'axios'

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