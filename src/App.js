
import './App.css'
import './Movie'
import { Movie } from './Movie';
import './Pagewrapper'
import { Pagewrapper } from './Pagewrapper';
import Movies from './movies.json'
import Pagination from './Pagination';
import { useState } from 'react';

function App() {

//initial State 
const [currentPage, setcurrentPage] = useState(1);
const total_for_page = 10;
// movies to show 
let movies = Movies;

const loadMovies = () => { 
  movies = movies.slice(
    (currentPage - 1) * total_for_page ,
     currentPage + total_for_page
     )
  
}
 
   const getTotalPages = () => {
      
    let totalMovies = Movies.length / total_for_page
    return Math.ceil(totalMovies)
   }

   loadMovies();
  return (
    <Pagewrapper>

      {movies.map(movie => {
        return (
          <Movie
            image={movie.image}
            title={movie.title}
            year={movie.year}
            rate={movie.rate}
            runTime={movie.run}
            director={movie.director}
            mmpa={movie.mmpa}
            release={movie.release}
            starts={movie.starts}
          >
            {movie.description}
          </Movie>
        )
      })}

      <Pagination 
        page={currentPage}
        total={getTotalPages()}
        onChange={ 
          (currentPage) => { setcurrentPage(currentPage)}
          } />



    </Pagewrapper>




  )
}

export default App;
