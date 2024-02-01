
import responseMovies from '../mocks/with-result.json'
import withNoResults from '../mocks/no-result.json'

export function useMovies() {

    const movies = responseMovies.Search
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
    return { movies:mappedMovies }
}