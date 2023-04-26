import { useEffect, useState, useRef } from 'react'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components'

function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if (search.match(/^d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }
    if (search.length < 3) {
      setError('La busqueda debe contener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}

function App () {
  const { search, setSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search })
  // const hasMovies = movies?.length > 0

  function handleSubmit (e) {
    e.preventDefault()
    getMovies()
  }

  function handleChange (event) {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)
  }

  return (
    <div className='dark:bg-blue-900 text-center dark:text-white min-h-screen'>
      <header className='flex flex-col justify-center items-center'>
        <h1 className='dark:text-white text-black font-bold text-4xl mt-20 mb-5'>Movie
          <strong className='text-cyan-500 font-extrabold'>SEARCHER
          </strong>
        </h1>
        <form className='flex items-center' onSubmit={handleSubmit}>
          <section className='relative w-screen max-w-md px-5 py-4 mx-auto rounded-md'>
            <div className='relative'>
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <svg className='w-5 h-5 text-gray-400' viewBox='0 0 24 24' fill='none'>
                  <path d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </span>
              <input
                type='text'
                className={`w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${error ? 'focus:border-red-500 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-40' : 'border-transparent'}`}
                placeholder='Avengers, Matrix, Avatar...'
                onChange={handleChange}
                value={search}
                name='query'
              />
            </div>
          </section>
          <button
            className='inline-block h-full rounded-lg bg-indigo-600 dark:bg-white px-7 py-4 text-base font-medium text-white dark:text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'
            type='submit'
          >
            Buscar
          </button>
        </form>
        {error && <p className='text-red-600'>{error}</p>}
      </header>
      <main>
        {
        loading
          ? <p>Cargando...</p>
          : <Movies movies={movies} />
      }
      </main>
    </div>
  )
}

export default App
