import React from 'react'
import { books } from '../data'

const EditorsChoice = () => {
  return (
    <div className='my-10 p-2.5'>
        <h2 className='common-h2'> EDITOR'S CHOICE <a href="#"> (View All) </a> </h2>
        <div className='grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 common-div'>
            {books.map(book => {
                return (
                    <div>
                        <img src={book.url} alt="" />
                        <p> <a href="#" className='hover:underline'> {book.bookName} </a> </p>
                        <p className='text-gray-500'> {book.writer} </p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default EditorsChoice
