// Task 4: delUser(number)
import { getServerURL } from "./task1.js";


export async function delUser(id){
 const res = await fetch(getServerURL() + "/users/" + id , {
  method: "DELETE"  
});// lo que el servidor devolvió

return await res.status;

}
// await delUser(5);
await delUser(6);