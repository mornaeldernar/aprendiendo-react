import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovie'
import { useSearch } from './hooks/useSearch'


function App() {
  const { movies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  const handleSumbit = (event) => {
    event.preventDefault()    
    console.log(search)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if(newQuery.startsWith(' ')) return
    updateSearch(newQuery)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSumbit}>
          <input onChange={handleChange} value={search} name="query" type="text" placeholder="Avengers, Star Wars, ..." />
          <button type="submit">Buscar</button>
        </form>
        {error && <p className='error'>{error}</p> }
      </header>
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
