var express = require('express');
var router = express.Router();

const TMDB_APIKEY = process.env.TMDB_APIKEY;

router.get('/movies',(req,res)=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_APIKEY}`)
    .then(response =>response.json())
    .then(data => res.json({movies: data.results}))
})

module.exports = router;
