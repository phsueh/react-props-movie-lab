import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((movieData, index) => <MovieCard 
      key={index}
      title={movieData.title}
      IMDBRating={movieData.IMDBRating}
      genres={movieData.genres}
      poster={movieData.poster}
      />)
  }



    // map over your movieData array and return an array of the correct JSX

  render() {

    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }

}