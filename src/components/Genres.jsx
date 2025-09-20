import React from 'react'

const Genres = () => {
  return (
    <div className='p-2.5'>

        <h2 className='common-h2'> BROWS GENRES &nbsp; <a href="#"> (View All) </a> </h2>

        <div className='common-div grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            <div className='relative'>
                <img src="images/genres/genre-1.png" alt="genre 1" />
                <a className='genre-link' href="#"> ROMANCE </a>
            </div>

            <div className='relative'>
                <img src="images/genres/genre-2.png" alt="genre 2" />
                <a className='genre-link' href="#"> ACTION & ADVENTURE </a>
            </div>

            <div className='relative'>
                <img src="images/genres/genre-3.png" alt="genre 3" />
                <a className='genre-link' href="#"> MYSTERY & THRILLER </a>
            </div>

            <div className='relative'>
                <img src="images/genres/genre-4.png" alt="genre 4" />
                <a className='genre-link' href="#"> BIOGRAPHIES & HISTORY </a>
            </div>

            <div className='relative'>
                <img src="images/genres/genre-5.png" alt="genre 5" />
                <a className='genre-link' href="#"> CHILDREN'S </a>
            </div>

            <div className='relative'>
                <img src="images/genres/genre-6.png" alt="genre 6" />
                <a className='genre-link' href="#"> YOUNG ADULT </a>
            </div>

            <div className='relative'>
                <img src="images/genres/genre-7.png" alt="genre 7" />
                <a className='genre-link' href="#"> FANTASY </a>
            </div>

            <div className='relative'>
                <img src="images/genres/genre-8.png" alt="genre 8" />
                <a className='genre-link' href="#"> HISTORICAL FICTION </a>
            </div>

            <div className='relative'>
                <img src="images/genres/genre-9.png" alt="genre 9" />
                <a className='genre-link' href="#"> HORROR </a>
            </div>

            <div className='relative'>
                <img src="images/genres/genre-10.png" alt="genre 10" />
                <a className='genre-link' href="#"> LITERARY FICTION </a>
            </div>

            <div className='relative'>
                <img src="images/genres/genre-11.png" alt="genre 11" />
                <a className='genre-link' href="#"> NON-FICTION </a>
            </div>

            <div className='relative'>
                <img src="images/genres/genre-12.png" alt="genre 12" />
                <a className='genre-link' href="#"> SCIENCE FICTION </a>
            </div>
        </div>

    </div>
  )
}

export default Genres
