import React from 'react'

const Blog = () => {
  return (
    <div className='bg-[#f8fcff] py-4'>
      <div  className='common-div my-10 p-2.5'>
        <h2 className='common-h2'> FROM THE BLOG &nbsp; <a href="#"> (View All) </a> </h2>

          <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
              <div>
                  <img src="/images/blogs/blog-1.jpg" alt="" />
                  <p> <a href="#" className='hover:underline text-xl'> Books Like Jurassic Tower </a> </p>
              </div>
              <div>
                  <img src="/images/blogs/blog-2.jpg" alt="" />
                  <p> <a href="#" className='hover:underline text-xl'> Books Like Off Balance </a> </p>
              </div>
              <div>
                  <img src="/images/blogs/blog-3.png" alt="" />
                  <p> <a href="#" className='hover:underline text-xl'> Books Like The Night Itself </a> </p>
              </div>
              <div>
                  <img src="/images/blogs/blog-4.jpg" alt="" />
                  <p> <a href="#" className='hover:underline text-xl'> Books Like The Deadline </a> </p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Blog
