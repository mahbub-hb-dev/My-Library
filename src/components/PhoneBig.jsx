import React from 'react'

const PhoneBig = () => {
  return (
    <div className='my-8 flex bg-[linear-gradient(to_bottom,white_15%,#FF5079_15%,#FF7854_77%,#8EA2B7_77%,#8EA2B7_100%)]'>

        <div className='w-[60%]'>
            <img className='block mx-auto' src="/images/phones.png" alt="Phones image" />
        </div>

        <div className='w-40% text-white p-12 text-right flex flex-col justify-between'>
            <div className='mt-[100px]'>
                <p className='font-mono'> Introducing your ereader mobile app! </p>
                <h2 className='text-5xl font-bold my-7'> Manybooks </h2>
                <p className='text-[20px] font-serif'> Get The Best Reading Experience </p>
                <p className='text-[13px]'> FREE DOWNLOAD • GENRES • BESTSELLERS • BOOK CATALOG </p>
                <p className='text-2xl font-bold mt-5'> NOW AVAILABLE </p>
            </div>

            <div className='flex justify-between'>
                <a href="#"> <img src="images/appStore/app-store.png" alt="app store image" /> </a>
                <a href="#"> <img src="images/appStore/google-play.png" alt="app store image" /> </a>
            </div>
        </div>

    </div>
  )
}

export default PhoneBig
