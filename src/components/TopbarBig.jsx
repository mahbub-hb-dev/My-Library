import React from 'react'
import { Dropdown, DropdownItem } from "flowbite-react";
import { CiSearch } from "react-icons/ci";

const TopbarBig = () => {
  return (
    <header className='px-3 py-1 bg-gradient-to-tr from-[#FF7854] to-[#FF5079]'>

        <div className='common-div flex gap-7 items-center'>
            
            {/* <div className='border w-[300px] flex [&>div]:w-1/2 gap-4'></div> */}

            <div className='flex items-center'>
                <a href="#"> <img className='h-16 mt-2.5' src="../public/images/myLogo/logo.png" alt="Logo" /> </a>
                {/* <a href="#" className='text-amber-200 text-3xl font-serif italic'> MB </a> */}
            </div>

            <div className='w-[145px]'>
                <Dropdown className='text-md cursor-pointer' label="DISCOVER" dismissOnClick={false}>
                    <div className='flex'>
                        <div>
                            <DropdownItem className='text-2xl font-[600] cursor-auto'> Genres </DropdownItem>
                            <DropdownItem><a href="#"> Action & Adventure </a></DropdownItem>
                            <DropdownItem><a href="#"> Bios & History </a></DropdownItem>
                            <DropdownItem><a href="#"> children's </a></DropdownItem>
                            <DropdownItem><a href="#"> Fantasy </a></DropdownItem>
                            <DropdownItem><a href="#"> Historical Fiction </a></DropdownItem>
                            <DropdownItem><a href="#"> Horror </a></DropdownItem>
                            <DropdownItem><a href="#"> Literary Fiction </a></DropdownItem>
                            <DropdownItem><a href="#"> Mystery & Thriller </a></DropdownItem>
                            <DropdownItem><a href="#"> Non-Fiction </a></DropdownItem>
                            <DropdownItem><a href="#"> Romance </a></DropdownItem>
                            <DropdownItem><a href="#"> Science Fiction </a></DropdownItem>
                            <DropdownItem><a href="#"> Young Adult </a></DropdownItem>
                        </div>

                        <div className='w-0.5 bg-gray-300'></div>

                        <div>
                            <DropdownItem className='text-2xl font-[600] cursor-auto text-black'> Resources </DropdownItem>
                            <DropdownItem><a href="#"> Authors </a></DropdownItem>
                            <DropdownItem><a href="#"> Languages </a></DropdownItem>
                            <DropdownItem><a href="#"> Genres </a></DropdownItem>
                            <DropdownItem><a href="#"> Articles </a></DropdownItem>
                            <DropdownItem><a href="#"> Author Interviews </a></DropdownItem>
                            <DropdownItem><a href="#"> Discuss </a></DropdownItem>
                        </div>
                    </div>
                </Dropdown>
            </div>


            <div className='flex flex-1'>
                <input className='w-[330px] border-0 outline-0 rounded-l-sm bg-white px-5 py-2 text-sm' type="text" name="search" placeholder='Search by title, author or keyword' />
                <button className='bg-[#17A288] text-3xl p-1 text-white rounded-r'> <CiSearch /> </button>
            </div>


            <div className='inline-flex flex-1 text-right'>
                <button className='text-white cursor-pointer ml-auto'> Log In </button>
            </div>

        </div>
    </header>
  )
}

export default TopbarBig;

// border common-div grid grid-cols-[60%_40%] md:grid-cols-[25%_65%_10%] lg:grid-cols-[20%_70%_10%] >>>> Parent div
// flex [&>div]:w-1/2 gap-4 w-[200px] order-1 border >>>> Dropdown & Logo Parent div
// border flex col-span-full md:col-span-1 mt-3 order-3 md:order-2 >>>> Search input Parent div
// border text-right inline-flex justify-end order-2 md:order-3 >>>> Login button parent div
// md:max-w-[320px] border-0 outline-0 w-full rounded-l-sm bg-white px-5 py-2 text-sm >>>> Search Input style
// border text-right inline-flex justify-end >>>> Button div Style