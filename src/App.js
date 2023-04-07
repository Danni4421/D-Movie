import {getListMovie, searchMovie} from "./api"
import { useEffect, useState } from 'react'
import './App.css';

const App = () => {

  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    getListMovie().then(result => {
      setListMovie(result)
    })
  }, [])

  const GetPopularMovie = () => {
    return listMovie.map((movie, key) => {
      return (
        <div className="Movie-card" key={key}>
          <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="" className="Movie-img" />
          <div className="Movie-title">{movie.title}</div>
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      )
    })
  }


  const searchValue = async (e) => {
    if (e.length > 3) {
      const movie = await searchMovie(e)
      setListMovie(movie.results)
    } 
    
    if (e === ''){
      getListMovie().then(result => {
        setListMovie(result)
      })
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="D-Movie">
          <h1 className='logos'>
            D'Movie 23
          </h1>
          <input 
            type="text" 
            id="searchMovie" 
            placeholder="Cari movie yang Anda inginkan..."
            onChange={({target}) => searchValue(target.value)}/>
          <div className="Movie-container">
            <GetPopularMovie />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
