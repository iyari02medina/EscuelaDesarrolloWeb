// / / / / / / / / / / / / / / logica de navegacion.  / / / / / / / / / / / / / / / / / /
// llamamos a la funcion que deaseamos escuchar cuando el usuario cambie de pagina 
window.addEventListener('hashchange', navigator, false)
// llamamos a la funcion que deseamos escuchar cuando se cargue la pagina home en la primera carga 
window.addEventListener('DOMContentLoaded', navigator, false)

function navigator() {
  console.log({ location }); // location representa la ubicación (URL) del objeto al que esta vinculado.

  if (location.hash.startsWith("#trends")) {
    trendsPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#movie=")) {
    movieDetailsPage();
  } else if (location.hash.startsWith("category=")) {
    categoriesPage();
} else {
    homePage();
}
};

function homePage(){
  console.log("HOME!!");
  getTrendingMoviesPreview();
  getCategoriesPreview();
}
function categoriesPage(){
    console.log('CATEGORIES!!')
}
function movieDetailsPage() {
  console.log("MOVIE!!");
}
function searchPage() {
  console.log("SEARCH!!");
}
function trendsPage(){
    console.log('TRENDS!!')
}
