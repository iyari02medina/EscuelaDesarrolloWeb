// declaramos nuestra varible axios (libreria de peticiones)
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json;charset=utf8",
  },
  params: {
    api_key: API_KEY,
  },
});

async function getTrendingMoviesPreview() {
  // usamos axios para consumir la API
  const { data } = await api(`trending/movie/day`); // -> data va entre {} por la libreria axios
  // const data = await res.json(); -> con Axios ya no es necesario llamar de esta manera a data
  const movies = data.results;
  console.log(movies);
  movies.forEach((movie) => {
    // Padres de los elementos a crear
    const trendingPreviewMoviesContainer = document.querySelector(
      "#trendingPreview .trendingPreview-movieList"
    );
    // creacion de etiquetas, clases y atributos
    const movieContainer = document.createElement("div"); // -> creamos etiqueta div de "movie-container"
    movieContainer.classList.add("movie-container"); // -> asignamos el nombre del div

    const movieImg = document.createElement("img"); // -> creamos etiqueta img
    movieImg.classList.add("movie-img"); // -> asignamos nombre a etiqueta img
    movieImg.setAttribute("alt", movie.title); // -> asignamos el atributo alt en la etiqueta <img>
    movieImg.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    ); // -> asignamos el atributo src en la etiqueta <img>

    movieContainer.appendChild(movieImg); // -> asignamos a movieImg como hijo de movieContainer.
    trendingPreviewMoviesContainer.appendChild(movieContainer);
  });
}
async function getCategoriesPreview() {
  // usamos Axios para consumir la API
  const { data } = await api(`genre/movie/list`); // -> data va entre {} por la libreria axios
  // const data = await res.json(); -> con Axios ya no es necesario llamar de esta manera a data
  const categories = data.genres;
  categories.forEach((category) => {
    // Padres de los elementos a crear
    const previewCategoriesContainer = document.querySelector(
      "#categoriesPreview .categoriesPreview-list"
    );
    // creacion de etiquetas, clases y atributos
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    const categotyTitle = document.createElement("h3");
    categotyTitle.classList.add("category-title");
    categotyTitle.setAttribute("id", category.name);
    const categoryTitleText = document.createTextNode(category.name);

    categotyTitle.appendChild(categoryTitleText);
    categoryContainer.appendChild(categotyTitle);
    previewCategoriesContainer.appendChild(categoryContainer);
  });
}
// las funciones de abajo las mandamos a llamar desde el archivo navigation.js para que cada pagina ocupe su funcion correspondiente
// getTrendingMoviesPreview();
// getCategoriesPreview();
