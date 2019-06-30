import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



const NYT_API_KEY = 'NNZ8HoSlhMVPveuLeMYilh6I3caSX3fV';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  componentDidMount(){
    fetch(URL)
    .then(res=>res.json())
    .then(data => this.setState({ reviews: data.results}))
  }



  render(){
    // console.log(this.state.reviews)
    return(
      <div className="latest-movie-reviews">
      <MovieReviews  reviews={this.state.reviews} />
      </div>
    )
  }
}
