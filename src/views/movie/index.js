import React, { useEffect, useReducer } from 'react';
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";
import Loading from "./components/Loading";
import './index.css';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST": // 搜索电影索引
      return {
        ...state,
        loading: true,
        errorMessage: null
      }
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      }
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      }
    default:
      return state

  }
}

const MovieIndex = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(res => res.json())
      .then(jsonRes => {
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: jsonRes.Search
        })
      })
      .catch(err => {
        dispatch({
          type: 'SEARCH_MOVIES_FAILURE',
          payload: err
        })
      })
  }, [])
  const search = searchValue => {
    dispatch({
      type: 'SEARCH_MOVIES_REQUEST'
    })
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(res => res.json())
      .then(jsonRes => {
        if (jsonRes.Response === "True") {
          dispatch({
            type: 'SEARCH_MOVIES_SUCCESS',
            payload: jsonRes.Search
          })
        } else {
          dispatch({
            type: 'SEARCH_MOVIES_FAILURE',
            error: jsonRes.Error
          })
        }
      })
  }
  const { movies, errorMessage, loading } = state
  return (
    <div className="App">
      <Header text="OMDB电影查询" />
      <Search search={search} />
      <p className="App-intro">搜索出你最爱的电影</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <Loading />
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
              movies.map((movie, index) => (
                <Movie key={`${index}-${movie.Title}`} movie={movie} />
              ))
            )}
      </div>
    </div>
  )
}

// function App() {
//   const {loading, setLoading] = useState(true)
//   const [movies, setMovies] = useState([])
//   const }errorMessage, setErrorMessage] = useState(null)
//   useEffect(() => {
//     fetch(MOVIE_API_URL)
//       .then(res => res.json())
//       .then(jsonResponse => {
//         setMovies(jsonResponse.Search)
//         setLoading(false)
//       })
//   }, []);
//   const search = searchValue => {
//     setLoading(true)
//     setErrorMessage(null)
//     fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
//       .then(response => response.json())
//       .then(jsonResponse => {
//         if (jsonResponse.Response === "True") {
//           setMovies(jsonResponse.Search)
//           setLoading(false)
//         } else {
//           setMovies(jsonResponse.Error)
//           setLoading(false)
//         }
//       })
//   }

//   return (
//     <div className="App">
//       <Header text='MIDB电影搜索' />
//       <Search search={search} />
//       <p className="App-intro">Sharing a few of our favourite movies</p>
//       <div className="movies">
//         {loading && !errorMessage ? (<span>loading...</span>) :
//           errorMessage ? <div className="errorMessage">{errorMessage}</div> :
//             (movies.map((movie, index) => (
//               <Movie key={`${index}-${movie.Title}`} movie={movie} />
//             )))
//         }
//       </div>
//     </div>
//   );
// }

export default MovieIndex;
