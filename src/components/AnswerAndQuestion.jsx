import { IoPersonCircleSharp } from "react-icons/io5";

const questionAndAnswerData = [
    {
        id : 1,
        person : "Khoi Tran Duc Dang",
        question : "I'm looking for more books like Conan the Barbarian",
        comment : "Read Sherlock Holmes"
    },
    {
        id : 2,
        person : "Raju Narayanan",
        question : "What book do you never get tired of?",
        comment : "Biographies of sportspersons and musicians"
    },
    {
        id : 3,
        person : "Elhadj souleymane Bah",
        question : "How can I rekindle my passion for reading?",
        comment : "Des livres qui me font penser à la vie, qui nourrissent mon esprit d'espoir"
    },
    {
        id : 4,
        person : "Eudora Barko",
        question : "How can I rekindle my passion for reading?",
        comment : "Start by reading genres you naturally love"
    },
]

const AnswerAndQuestion = () => {
  return (
    <div className='common-div my-10 p-2.5'>
        <h2 className='common-h2'> RECENTLY ANSWERED QUESTIONS &nbsp; <a href="#"> (View All) </a> </h2>

        <div>
            {questionAndAnswerData.map((data, index) => (
                <div key={index} className='border-b border-b-gray-200 py-3 text-[17px]'>
                    <div className='flex my-2'>
                        <IoPersonCircleSharp className='text-5xl text-gray-500 mr-2.5' />
                        <p className='font-bold'> <a href="#" className='text-green-600'> {data.person} </a> on <a href="#" className='text-green-600'> {data.question} </a> </p>
                    </div>
                    <p> {data.comment} </p>
                </div>
            ))}
        </div>


    </div>
  )
}

export default AnswerAndQuestion
