// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from "./task1.js";

export async function addUser(){


  const res = await fetch(getServerURL() + "/users", {
  method: "POST",
  body: JSON.stringify({
    id: 6,
    first_name: "Kai",
    last_name: "Nathaniel",
    email: "kai.n@example.org"
  }),
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
}); // lo que el servidor devolvió

return await res.json();
}

// console.log(await addUser());