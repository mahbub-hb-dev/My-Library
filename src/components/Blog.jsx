const blogData = [
  {
    id : 1,
    title : "Books Like Jurassic Tower",
    image : "/images/blogs/blog-1.jpg",
    alt : "blog image 1"
  },
  {
    id : 2,
    title : "Books Like Off Balance",
    image : "/images/blogs/blog-2.jpg",
    alt : "blog image 2"
  },
  {
    id : 3,
    title : "Books Like The Night Itself",
    image : "/images/blogs/blog-3.png",
    alt : "blog image 3"
  },
  {
    id : 4,
    title : "Books Like The Deadline",
    image : "/images/blogs/blog-4.jpg",
    alt : "blog image 4"
  }
]

const Blog = () => {
  return (
    <div className='bg-[#f8fcff] py-4'>
      <div  className='common-div my-10 p-2.5'>
        <h2 className='common-h2'> FROM THE BLOG &nbsp; <a href="#"> (View All) </a> </h2>

          <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
              {blogData.map((data, index) => (
                <div key={index}>
                  <img src={data.image} alt={data.alt} />
                  <p> <a href="#" className='hover:underline text-xl'> {data.title} </a> </p>
                </div>
              ))}
          </div>

      </div>
    </div>
  )
}

export default Blog
