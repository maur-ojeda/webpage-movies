
import './App.css'
import './Movie'
import { Movie } from './Movie';
import './Pagewrapper'
import { Pagewrapper } from './Pagewrapper';
import Movies from './movies.json'
import Pagination from './Pagination';

function App() {

  let movies = Movies;


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

      <Pagination page={2} total={4} onChange={(page) => {
        alert(page)
        //

      }} />



    </Pagewrapper>




  )
}

export default App;
