import React from 'react';

const MovieList = ({movies, keyword}) => {

    const durationInMinutes = time => {
        const duration = time
        if (duration.includes('h')) return duration.replace(/h|/g,'') * 60
        if (duration.includes('m')) return duration.replace(/m|/g,'')
     }

    const sortMovieList = (movieA, movieB) => {
        const timeA = durationInMinutes(movieA.time);
        const timeB = durationInMinutes(movieB.time);
        return timeB - timeA
    }

    const movieList = movies
    if(movieList.length >= 2) movieList.sort(sortMovieList)
        return (
            <table id="directory-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ratings</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                { movieList.length  ?
                        movieList.map((movie, index) => (
                        <tr key={index}>
                            <td>{movie.name}</td>
                            <td>{movie.rating}</td>
                            <td>{movie.time}</td>
                        </tr>
                        )) :
                        <td id="no-result">No results found</td>}
                </tbody>
            </table>
        )
}

export default MovieList;