
import { IoPersonCircleSharp } from "react-icons/io5";

const AnswerAndQuestion = () => {
  return (
    <div className='common-div my-10 p-2.5'>
        <h2 className='common-h2'> RECENTLY ANSWERED QUESTIONS &nbsp; <a href="#"> (View All) </a> </h2>

        <div>
            <div className='border-b border-b-gray-200 py-3 text-[17px]'>
                <div className='flex my-2'>
                    <IoPersonCircleSharp className='text-5xl text-gray-500 mr-2.5' />
                    <p className='font-bold'> <a href="#" className='text-green-600'> Khoi Tran Duc Dang </a> on <a href="#" className='text-green-600'> I'm looking for more books like Conan the Barbarian </a> </p>
                </div>
                <p> Read Sherlock Holmes </p>
            </div>

            <div className='border-b border-b-gray-200 py-3 text-[17px]'>
                <div className='flex my-2'>
                    <IoPersonCircleSharp className='text-5xl text-gray-500 mr-2.5' />
                    <p className='font-bold'> <a href="#" className='text-green-600'> Raju Narayanan </a> on <a href="#" className='text-green-600'> What book do you never get tired of? </a> </p>
                </div>
                <p> Biographies of sportspersons and musicians  </p>
            </div>

            <div className='border-b border-b-gray-200 py-3 text-[17px]'>
                <div className='flex my-2'>
                    <IoPersonCircleSharp className='text-5xl text-gray-500 mr-2.5' />
                    <p className='font-bold'> <a href="#" className='text-green-600'> Elhadj souleymane Bah </a> on <a href="#" className='text-green-600'>  How can I rekindle my passion for reading? </a> </p>
                </div>
                <p> Des livres qui me font penser à la vie, qui nourrissent mon esprit d'espoir  </p>
            </div>

            <div className='border-b border-b-gray-200 py-3 text-[17px]'>
                <div className='flex my-2'>
                    <IoPersonCircleSharp className='text-5xl text-gray-500 mr-2.5' />
                    <p className='font-bold'> <a href="#" className='text-green-600'> Eudora Barko </a> on <a href="#" className='text-green-600'>  How can I rekindle my passion for reading? </a> </p>
                </div>
                <p> Start by reading genres you naturally love  </p>
            </div>
        </div>


    </div>
  )
}

export default AnswerAndQuestion
