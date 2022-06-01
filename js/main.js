
// Call form elements
let elFilterForm = $(".js-form-filter");
let elSearchInput = $(".js-search-input", elFilterForm);
let elSortSelect = $(".js-movie-sort", elFilterForm);


let moviesArray = [];
let movieCategories = []

// Call bokmarks list
let elBookmarkList = $(".bookmarks-list");

// Call movies list
let elMoviesList = $(".js-movies-list");

// Call buttons
let elModalBtn = $(".js-modal-btn");
let elBookmarkBtn = $(".js-bookmark-btn");

// Call templates
let elCardTemplate = $("#card-template").content;


elFilterForm.addEventListener( "submit",(evt)=>{
  evt.preventDefault();
})


let MOVIES_API = `http://www.omdbapi.com/?apikey=51c2c276&s=harry`


// Fetch function
let callMovies = function(api =  MOVIES_API){
  fetch(api).then(response => {
    return response.json()
  }).then(data => {
    elMoviesList.innerHTML = "";
    let newMoviesFragment = document.createDocumentFragment();
    
    data.Search.forEach(movie => {
      let newCard = elCardTemplate.cloneNode(true);
      
      $(".movie-poster", newCard).src = movie.Poster;
      $(".movie-title", newCard).textContent = movie.Title;
      $(".movie-year", newCard).textContent = movie.Year;
      $(".type", newCard).textContent = movie.Type;
      
      newMoviesFragment.append(newCard)
    })

    elMoviesList.append(newMoviesFragment)
  })
}
callMovies(MOVIES_API)

elSearchInput.addEventListener( "change", (evt)=>{

  evt.preventDefault();
  if (elSearchInput.value !== ""){
    MOVIES_API = `http://www.omdbapi.com/?apikey=51c2c276&s=${elSearchInput.value.trim()}`
  }else {
    MOVIES_API = `http://www.omdbapi.com/?apikey=51c2c276&s=harry`
  }
  
  callMovies(MOVIES_API)
})


