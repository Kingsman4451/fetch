let FETCH_API = `http://www.omdbapi.com/?apikey=b3078df7&s=Hulk&page=2`;
// let FETCH_NEWS_API = `https://newsapi.org/v2/everything?q=google&apiKey=ca0c377dba5549d48bc20fe6a4586afd`;

let elButtonUsedForFetch = document.querySelector(".js-fetch-use");

// let callNews = function() {
//   fetch((FETCH_NEWS_API))
//     .then(response => response.json())
//     .then(data => console.log(data.articles))
// }



let callMovies = function() {
  fetch(FETCH_API)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    data.Search.forEach(function(datum) {
      console.log(datum.Title);
    })
  })
}

elButtonUsedForFetch.addEventListener("click", callMovies)