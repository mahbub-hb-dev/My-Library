import { useEffect, useState } from 'react'
import AccordionFooter from './AccordionFooter'
import NormalFooter from './NormalFooter'

const Footer = () => {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(()=> {

        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768)
        }

        window.addEventListener('resize', handleResize);
        
        return ()=> window.removeEventListener('resize', handleResize);

    }, [])

  return (
    <footer className='p-5 bg-[#C5375A]'>

        {/* <div className='block md:hidden'>
            <AccordionFooter />
        </div>
        <div className='hidden md:block'>
            <NormalFooter />
        </div> */}

        {isDesktop ? <NormalFooter /> : <AccordionFooter />}

    </footer>
  )
}

export default Footer
