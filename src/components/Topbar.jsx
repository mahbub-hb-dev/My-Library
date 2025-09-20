import React, { useEffect, useState } from 'react'
import TopbarBig from './TopbarBig'
import TopbarSmall from './TopbarSmall'

const Topbar = () => {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(()=>{

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleResize);
    return ()=> window.removeEventListener('resize', handleResize);

  }, [])

  return (
    <div>
      {isDesktop ? <TopbarBig /> : <TopbarSmall />}
    </div>
  )
}

export default Topbar
