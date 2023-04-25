function App () {
  return (
    <div className='dark:bg-blue-900 h-screen text-center'>
      <header className='flex flex-col justify-center items-center'>
        <h1 className='dark:text-white text-black font-bold text-4xl mt-20 mb-5'>Movie
          <strong className='text-cyan-500 font-extrabold'>SEARCHER
          </strong>
        </h1>
        <form className='flex items-center'>
          <section className='relative w-screen max-w-md px-5 py-4 mx-auto rounded-md'>
            <div className='relative'>
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <svg className='w-5 h-5 text-gray-400' viewBox='0 0 24 24' fill='none'>
                  <path d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </span>
              <input
                type='text'
                className='w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
                placeholder='Avengers, Matrix, Avatar...'
              />
            </div>
          </section>
          <button className='inline-block h-full rounded-lg bg-indigo-600 dark:bg-white px-7 py-4 text-base font-medium text-white dark:text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'>
            Buscar
          </button>
        </form>
      </header>
      <main>
        <p>Aqui iran los resultados</p>
      </main>
    </div>
  )
}

export default App
