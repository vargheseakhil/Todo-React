import React, { Component } from 'react';
import MovieList from './MovieList';
import './App.css';

class App extends Component {
  state = {
    movieList : [],
    searchResults: [],
    searchKeyWord: '',
  }
  validData(name,ratings,duration) {
    if((name && ratings && duration) && (duration.endsWith("h") || duration.endsWith("m"))) return true
    else return false
  }
  onSubmit = (e) => {
    e.preventDefault();
    const movieName = this.refs.movieName.value
    const movieRating = this.refs.ratings.value
    const duration = this.refs.duration.value
    if(this.validData(movieName,movieRating,duration)) {
      this.setState({
        movieList:[...this.state.movieList, {name: movieName, rating: movieRating, time:duration}]
      })
      this.refs.movieName.value = ''
      this.refs.ratings.value = ''
      this.refs.duration.value = ''
    }
  }
  handleSearch = () => {
    this.setState({
      searchKeyWord:this.refs.keyword.value
    })
    const searchMovies = this.refs.keyword.value ? this.state.movieList.filter(movie => movie.name.startsWith(this.refs.keyword.value)):
      this.state.movieList
    this.setState({
      searchResults:[...searchMovies]
    })
  }
  render () {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit} className="create-todo-form">
          <label> Movie Name </label>
          <input type="text" id="name-input" ref="movieName"/> <br />
          <label> Ratings </label>
          <input type="text" id="ratings-input" ref="ratings"/> <br />
          <label> Duration </label>
          <input type="text" id="duration-input" ref="duration"/> <br />
          <button id="submit-button">Submit</button>
        </form>
      <div className="search-container">
          <label> Search </label>
          <input type="text" id="search-input" ref="keyword" onChange={this.handleSearch}/> <br />
      </div>
      <MovieList 
          movies={this.state.searchKeyWord ? this.state.searchResults :this.state.movieList }
      />
    </div>
    );
  }
}

export default App;