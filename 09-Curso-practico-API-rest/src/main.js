async function getTrendingMoviesPreview (){
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    const data = await res.json();
    const movies = data.results;
    console.log(movies)
    movies.forEach(movie =>{
        // Padres de los elementos a crear 
        const trendingPreviewMoviesContainer = document.querySelector(
          "#trendingPreview .trendingPreview-movieList"
        );
        // creacion de etiquetas, clases y atributos 
        const movieContainer = document.createElement('div'); // -> creamos etiqueta div de "movie-container"
        movieContainer.classList.add('movie-container'); // -> asignamos el nombre del div

        const movieImg = document.createElement('img'); // -> creamos etiqueta img
        movieImg.classList.add('movie-img'); // -> asignamos nombre a etiqueta img
        movieImg.setAttribute('alt',movie.title); // -> asignamos el atributo alt en la etiqueta <img>
        movieImg.setAttribute(
          "src",
          `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        ); // -> asignamos el atributo src en la etiqueta <img>

        movieContainer.appendChild(movieImg); // -> asignamos a movieImg como hijo de movieContainer.
        trendingPreviewMoviesContainer.appendChild(movieContainer)
    })

}
async function getCategoriesPreview (){
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    );
    const data = await res.json();
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

      categotyTitle.appendChild(categoryTitleText)
      categoryContainer.appendChild(categotyTitle);
      previewCategoriesContainer.appendChild(categoryContainer);
    });

}
getTrendingMoviesPreview();
getCategoriesPreview();