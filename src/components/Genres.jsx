const genresBooks = [
    {
        id : 1,
        title : "ROMANCE",
        image : "/images/genres/genre-1.png",
        alt : "Genre book 1"
    },
    {
        id : 2,
        title : "ACTION & ADVENTURE",
        image : "/images/genres/genre-2.png",
        alt : "Genre book 2"
    },
    {
        id : 3,
        title : "MYSTERY & THRILLER",
        image : "/images/genres/genre-3.png",
        alt : "Genre book 3"
    },
    {
        id : 4,
        title : "BIOGRAPHIES & HISTORY",
        image : "/images/genres/genre-4.png",
        alt : "Genre book 4"
    },
    {
        id : 5,
        title : "CHILDREN'S",
        image : "/images/genres/genre-5.png",
        alt : "Genre book 5"
    },
    {
        id : 6,
        title : "YOUNG ADULT",
        image : "/images/genres/genre-6.png",
        alt : "Genre book 6"
    },
    {
        id : 7,
        title : "FANTASY",
        image : "/images/genres/genre-7.png",
        alt : "Genre book 7"
    },
    {
        id : 8,
        title : "HISTORICAL FICTION",
        image : "/images/genres/genre-8.png",
        alt : "Genre book 8"
    },
    {
        id : 9,
        title : "HORROR",
        image : "/images/genres/genre-9.png",
        alt : "Genre book 9"
    },
    {
        id : 10,
        title : "LITERARY FICTION",
        image : "/images/genres/genre-10.png",
        alt : "Genre book 10"
    },
    {
        id : 11,
        title : "NON-FICTION",
        image : "/images/genres/genre-11.png",
        alt : "Genre book 11"
    },
    {
        id : 12,
        title : "SCIENCE FICTION",
        image : "/images/genres/genre-12.png",
        alt : "Genre book 12"
    },
]

const Genres = () => {
  return (
    <div className='p-2.5'>

        <h2 className='common-h2'> BROWS GENRES &nbsp; <a href="#"> (View All) </a> </h2>

        <div className='common-div grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {genresBooks.map((data, index) => (
                <div key={index} className='relative'>
                    <img src={data.image} alt={data.alt} />
                    <a className='genre-link' href="#"> {data.title} </a>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Genres
