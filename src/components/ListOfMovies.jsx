export function ListOfMovies ({ movies }) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-5 mx-2'>
      {
      movies.map(movie => (
        <li
          key={movie.id}
          className='flex flex-col items-center'
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
            alt={movie.titleOriginal}
            className='w-max'
          />
          <h2 className='text-2xl'>{movie.title}</h2>
          <p>{movie.releaseDate}</p>
        </li>
      ))
    }
    </ul>
  )
}
