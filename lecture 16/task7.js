const movies = [
  { title: "Movie A", rating: 8.5 },
  { title: "Movie B", rating: 6.0 }
];

// Keep movies with rating > 8 and return titles
const topMovies = movies
  .filter(movie => movie.rating > 8)
  .map(movie => movie.title);

console.log(topMovies);