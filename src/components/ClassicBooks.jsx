const popularClassicBooks = [
    {
        id : 1,
        title : "Excercise Is Murder",
        image : "/images/classics/classic-1.jpg",
        alt : "classic book 1",
    },
    {
        id : 2,
        title : "Sister Witches",
        image : "/images/classics/classic-2.jpg",
        alt : "classic book 2",
    },
    {
        id : 3,
        title : "From Darkness to Light",
        image : "/images/classics/classic-3.jpg",
        alt : "classic book 3",
    },
    {
        id : 4,
        title : "The Tunnels Of Rasand",
        image : "/images/classics/classic-4.jpg",
        alt : "classic book 4",
    },
    {
        id : 5,
        title : "Creature Of Ancient Dreaming",
        image : "/images/classics/classic-5.jpg",
        alt : "classic book 5",
    },
    {
        id : 6,
        title : "Creature Of Ancient Dreaming",
        image : "/images/classics/classic-6.jpg",
        alt : "classic book 6",
    },
    {
        id : 7,
        title : "Excercise Is Murder",
        image : "/images/classics/classic-1.jpg",
        alt : "classic book 1",
    },
    {
        id : 8,
        title : "Sister Witches",
        image : "/images/classics/classic-2.jpg",
        alt : "classic book 2",
    },
    {
        id : 9,
        title : "From Darkness to Light",
        image : "/images/classics/classic-3.jpg",
        alt : "classic book 3",
    },
    {
        id : 10,
        title : "The Tunnels Of Rasand",
        image : "/images/classics/classic-4.jpg",
        alt : "classic book 4",
    },
    {
        id : 11,
        title : "Creature Of Ancient Dreaming",
        image : "/images/classics/classic-5.jpg",
        alt : "classic book 5",
    },
    {
        id : 12,
        title : "Creature Of Ancient Dreaming",
        image : "/images/classics/classic-6.jpg",
        alt : "classic book 6",
    },
]

const ClassicBooks = () => {
  return (
    <div className='my-10 p-2.5'>
      
        <h2 className='common-h2'> POPULAR CLASSICS &nbsp; <a href="#"> (View All) </a> </h2>

        <div className='common-div justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

            {popularClassicBooks.map((data, index) => (
                <div key={index}>
                    <img src={data.image} alt={data.alt} />
                    <p> <a href="#" className='hover:underline'> {data.title} </a> </p>
                </div>
            ))}
            
        </div>

    </div>
  )
}

export default ClassicBooks
