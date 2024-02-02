const API_KEY = '78c8eb74'

export const searchMovies = async ({ search }) => {
  
  console.log('searchMovies',search)
  if(search === '') return
  try {
    const response = await fetch(`https://omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    
    const json = await response.json()
    const movies = json.Search
    const movieList = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
    return movieList
  }catch(e) {
    throw new Error('Error al buscar las peliculas')
  }
}