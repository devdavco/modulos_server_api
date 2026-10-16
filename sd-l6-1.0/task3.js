// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from "./task1.js";

export function addUser(){


  fetch(getServerURL() + "/users", {
  method: "POST",
  body: JSON.stringify({
    id: 6,
    first_name: "Kai",
    last_name: "Nathaniel",
    email: "'kai.n@example.org'"
  }),
  headers: {
    "Content-Type": "application/json; charset=UTF-8"
  }
}).then(res => res.json()).then(data => console.log(data)); // lo que el servidor devolvió
}

addUser();