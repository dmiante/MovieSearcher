const API_KEY = '466e8d788226d259550f0962460440f1'
export const searchMovies = async ({ search = 'batman' }) => {
  if (search === '') return null
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
    const json = await response.json()

    const movies = json.results
    return movies?.map(movie => ({
      id: movie.id,
      title: movie.title,
      releaseDate: movie.release_date,
      poster: movie.poster_path,
      titleOriginal: movie.original_title
    }))
  } catch (error) {
    throw new Error('Error searching movies.')
  }
}
