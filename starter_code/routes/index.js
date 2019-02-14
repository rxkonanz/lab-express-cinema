const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => {
    console.log(movies);
    res.render('movies', {movies});
  })
  .catch(error => {
    console.log(error)
  })
});

router.get('/movies/:movieId', (req, res, next) => {
  console.log(req.params.movieId);
  Movie.findOne({_id: req.params.movieId})
  .then(movie => {
    res.render('movieInfo', {movie})
    console.log(movie);
  })
  .catch(error => {
    console.log(error);
  })
});

module.exports = router;
