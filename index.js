const express = require('express');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Movie list
const movies = [
  { id: 1, movie: "Bush's Brain", author: "Dulcia" },
  { id: 2, movie: "Love unto Death (L'amour a mort)", author: "Bathsheba" },
  { id: 3, movie: "Bring It On: In It To Win It", author: "Hillier" },
  { id: 4, movie: "Rough Magic", author: "Dominique" },
  { id: 5, movie: "Tomboy", author: "Laina" }
];

// GET routes
app.get('/', (req, res) => {
  res.send("Hello from GET");
});

app.get('/movies', (req, res) => {
  res.json(movies);
});

// POST route to add a new movie
app.post('/movie', (req, res) => {
  const { movie, author } = req.body;

  if (!movie || !author) {
    return res.status(400).json({ error: "Movie and author are required" });
  }

  const newMovie = {
    id: movies.length + 1,
    movie,
    author
  };

  movies.push(newMovie);
  res.status(201).json(newMovie);
});

app.listen(3000, () => {
  console.log("Start server at port 3000");
});