import React from 'react'

const TrendingBooks = () => {
  return (
    <div className='common-div px-2.5'>
      
        <h2 className='common-h2'> TRENDING BOOK'S &nbsp; <a href="#"> (View All) </a> </h2>

        <div className='justify-center gap-3 max-sm:grid max-sm:grid-cols-2 min-sm:flex min-sm:flex-wrap'>
            <div>
                <img src="/images/trending/t-1.jpg" alt="genre 1" />
                <p> <a href="#" className='hover:underline'> Excercise Is Murder</a> </p>
            </div>

            <div>
                <img src="/images/trending/t-2.jpg" alt="genre 2" />
                <p> <a href="#" className='hover:underline'> Sister Witches </a> </p>
            </div>

            <div>
                <img src="/images/trending/t-3.jpg" alt="genre 3" />
                <p> <a href="#" className='hover:underline'> From Darkness to Light </a> </p>
            </div>

            <div>
                <img src="/images/trending/t-4.jpg" alt="genre 4" />
                <p> <a href="#" className='hover:underline'> The Tunnels Of Rasand </a> </p>
            </div>

            <div>
                <img src="/images/trending/t-5.jpg" alt="genre 5" />
                <p> <a href="#" className='hover:underline'> Creature Of Ancient Dreaming </a> </p>
            </div>
        </div>

    </div>
  )
}

export default TrendingBooks
