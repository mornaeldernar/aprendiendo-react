import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovie'
import { useSearch } from './hooks/useSearch'


function App() {
  const [ sort, setSort ] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  const handleSumbit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if(newQuery.startsWith(' ')) return
    updateSearch(newQuery)
    debouncedGetMovies( newQuery )
  }

  const handleSort  = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSumbit}>
          <input onChange={handleChange} value={search} name="query" type="text" placeholder="Avengers, Star Wars, ..." />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p className='error'>{error}</p> }
      </header>
      <main>
        {
          loading
          ? <p>Cargando</p>
          :<Movies movies={movies}/>
        }
      </main>
    </div>
  )
}

export default App
