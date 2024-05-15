import '../styles/App.styl'
import { useState, useEffect, useRef } from 'react'

import Header from '../components/Header'
// import Contacts from '../components/Contacts'
// import StickyFooter from './Footer'

function Wrapper({children}) {
  return (
    <div className='App' id='Home'>
      <Header/>
      {children}
      {/* <Contacts /> */}
      {/* TODO Сделать Footer
      <Footer></Footer> */}
      {/* <StickyFooter /> */}
    </div>
  )
}

export default Wrapper

export const useOutsideAlerter = (initialIsVisible) => {
  const [isShow, setIsShow] = useState(initialIsVisible)
  const ref = useRef(null)
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) { setIsShow(false) }
    // if (ref.current && !ref.current.contains(event.target)) {
    //   // document.body.style.position = 'relative'
    //   document.body.style.overflowY = 'auto'
    //   document.body.style.paddingRight = ''
    //   setIsShow(false)
    // } else {
    //   // document.body.style.position = 'fixed'
    //   // document.body.style.top = window.scrollY + 'px'
    //   document.body.style.overflowY = 'hidden'
    //   document.body.style.paddingRight = '15px'
    // }
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => document.removeEventListener('click', handleClickOutside, true)
  });
  return { ref, isShow, setIsShow }
}