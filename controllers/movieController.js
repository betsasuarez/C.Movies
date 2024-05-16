const Movie = require('../models/movie');

const movies = [
  new Movie('LA BARBIE', 'Greta Gerwig', '2 horas'),
  new Movie('X-men', 'Matthew Vaughn', '3 horas'),
  new Movie('Camino hacia el terror', 'Rob Schmidt', '3 horas')
];

const getAllMovies = (req, res) => {
  res.json(movies);
};

const getMovieById = (req, res) => {
  const movie = movies.find(movie => movie.id === req.params.id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
};

const createMovie = (req, res) => {
  const { name, director, duration } = req.body;
  const newMovie = new Movie(name, director, duration);
  movies.push(newMovie);
  res.status(201).json(newMovie);
};

const updateMovie = (req, res) => {
  const { id } = req.params;
  const { name, director, duration } = req.body;
  const movieIndex = movies.findIndex(movie => movie.id === id);
  if (movieIndex !== -1) {
    movies[movieIndex] = { id, name, director, duration };
    res.json(movies[movieIndex]);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
};

const deleteMovie = (req, res) => {
  const { id } = req.params;
  const movieIndex = movies.findIndex(movie => movie.id === id);
  if (movieIndex !== -1) {
    movies.splice(movieIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
};
