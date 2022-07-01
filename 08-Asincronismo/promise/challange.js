// fetch
// La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.

import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
  return fetch(urlApi);
}


fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((response) => response.json())
  .then((product) => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then((response => response.json()))
  .then((category) => {
    console.log(category.name);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("Finally"));

  