const trendingBooksData = [
    {
        id : 1,
        title : "Excercise Is Murder",
        image : "/images/trending/t-1.jpg",
        alt : "genre 1"
    },
    {
        id : 2,
        title : "Sister Witches",
        image : "/images/trending/t-2.jpg",
        alt : "genre 2"
    },
    {
        id : 3,
        title : "From Darkness to Light",
        image : "/images/trending/t-3.jpg",
        alt : "genre 3"
    },
    {
        id : 4,
        title : "The Tunnels Of Rasand",
        image : "/images/trending/t-4.jpg",
        alt : "genre 4"
    },
    {
        id : 5,
        title : "Creature Of Ancient Dreaming",
        image : "/images/trending/t-5.jpg",
        alt : "genre 5"
    },
]

const TrendingBooks = () => {
  return (
    <div className='common-div px-2.5'>
      
        <h2 className='common-h2'> TRENDING BOOK'S &nbsp; <a href="#"> (View All) </a> </h2>

        <div className='justify-center gap-3 max-sm:grid max-sm:grid-cols-2 min-sm:flex min-sm:flex-wrap'>
            {trendingBooksData.map((data, index) => (
                <div key={index}>
                    <img src={data.image} alt={data.alt} />
                    <p> <a href="#" className='hover:underline'> {data.title} </a> </p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default TrendingBooks
