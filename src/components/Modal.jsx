import { useState, useEffect, useRef } from 'react'
import '../styles/Modal.styl'

function Modal(props) {
  const { ref, isShow, setIsShow } = useOutsideAlerter(false)
  return (
    <div className='backdropModal' ref={ref}>
      <div className='modal'>
        {props.children}
      </div>
    </div>
  )
}

export default Modal

export const useOutsideAlerter = (initialIsVisible) => {
  const [isShow, setIsShow] = useState(initialIsVisible)
  const ref = useRef(null)
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) { setIsShow(false) }
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => document.removeEventListener('click', handleClickOutside, true)
  });
  return { ref, isShow, setIsShow }
}