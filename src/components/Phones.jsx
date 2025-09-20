import React, { useEffect, useState } from 'react'
import PhoneBig from './PhoneBig'
import PhoneSmall from './PhoneSmall'

const Phones = () => {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 950);

    useEffect(()=>{

        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 950)
        }

        window.addEventListener('resize', handleResize);

        return ()=> window.removeEventListener('resize', handleResize);

    })

  return (
    <div>
        {isDesktop ? <PhoneBig /> : <PhoneSmall />}
    </div>
  )
}

export default Phones
