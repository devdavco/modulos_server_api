// Task 2: listUsers()
import { getServerURL } from "./task1.js";

export async function listUsers(){
  try {

      let endpoint = getServerURL()+ "/users"
// console.log(endpoint,"endpoint");

      const response = await fetch(endpoint);

       const data = await response.json()

      // console.log(data)

      return data;
        
       
    } catch (error) { 
        console.log('Hubo un error al buscar los usuarios: ', error.message);
        return [];
    }
  
}

console.log(await listUsers());