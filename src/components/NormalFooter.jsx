import React from 'react'

const NormalFooter = () => {
  return (
    <div className='common-div'>
        <div className='flex [&>div]:w-1/4 text-white mb-8 text-sm'>
            <div>
                <h3 className='text-red-300 text-xl font-[600] mb-6'> Library </h3>
                <p> <a className='hover:underline' href="#"> Genres </a> </p>
                <p className='leading-10'> <a className='hover:underline' href="#"> Languages </a> </p>
                <p> <a className='hover:underline' href="#"> Authors </a> </p>
            </div>
            <div>
                <h3 className='text-red-300 text-xl font-[600] mb-6'> Community </h3>
                <p> <a className='hover:underline' href="#"> Articles </a> </p>
                <p className='leading-10'> <a className='hover:underline' href="#"> Authors Interviews </a> </p>
                <p> <a className='hover:underline' href="#"> Newsletter </a> </p>
            </div>
            <div>
                <h3 className='text-red-300 text-xl font-[600] mb-6'> Company </h3>
                <p> <a className='hover:underline' href="#"> Author Services </a> </p>
                <p className='leading-10'> <a className='hover:underline' href="#"> About / Contact </a> </p>
                <p> <a className='hover:underline' href="#"> Accessibility Statement </a> </p>
            </div>
            <div>
                <h3 className='text-red-300 text-xl font-[600] mb-6'> Follow </h3>
                <p> <a className='hover:underline' href="#"> Facebook </a> </p>
                <p className='leading-10'> <a className='hover:underline' href="#"> Twitter </a> </p>
                <p> <a className='hover:underline' href="#"> Instagram </a> </p>
            </div>
        </div>
        <hr />
        <div className='text-red-300 flex justify-between py-6 text-xl'>
            <p> Developed By &copy; Mahbub Hasan Belal </p>
            <p> <a href="#" className='hover:underline'> Terms </a> - <a href="#" className='hover:underline'> Privacy </a> </p>
        </div>
    </div>
  )
}

export default NormalFooter
