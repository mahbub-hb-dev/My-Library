import React from 'react'

const PhoneSmall = () => {
  return (
    <div className='my-8'>
      
        <div className='bg-[linear-gradient(to_bottom,white_15%,#FF5079_15%,#FF7854_77%,#8EA2B7_77%,#8EA2B7_100%)]'>
            <img className='block mx-auto m-0' src="images/phones.png" alt="Phones image" />
        </div>

        <div className='py-5 px-3 bg-gradient-to-tr from-[#FF7854] to-[#FF5079]'>
            <div className='text-white text-center'>
                <p className='font-mono'> Introducing your ereader mobile app! </p>
                <h2 className='text-5xl font-bold my-5'> Manybooks </h2>
                <p className='text-[20px] font-serif'> Get The Best Reading Experience </p>
                <p className='text-[13px]'> FREE DOWNLOAD • GENRES • BESTSELLERS • BOOK CATALOG </p>
                <p className='text-2xl font-bold my-5'> NOW AVAILABLE </p>
            </div>

            <div className='flex gap-3 justify-evenly items-center'>
                <a href="#"> <img src="images/appStore/app-store.png" alt="app store image" /> </a>
                <a href="#"> <img src="images/appStore/google-play.png" alt="app store image" /> </a>
            </div>
        </div>

    </div>
  )
}

export default PhoneSmall
