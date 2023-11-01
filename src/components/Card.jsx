import '../styles/Card.styl'
import { useState, useEffect, useRef } from 'react'

const Card = props => {
  const { ref, isShow, setIsShow } = useOutsideAlerter(false)
  const [fullImg, setFullImg] = useState(false)

  function setToggleCard (bool) {
    if (bool) {
      // document.body.style.position = 'fixed'
      // document.body.style.top = window.scrollY + 'px'
      // document.body.style.overflowY = 'hidden'
      // document.body.style.paddingRight = '15px'
    } else {
      // console.log(document.body.style)
      // document.body.style.position = 'relative'
      // document.body.style.overflowY = 'auto'
      // document.body.style.paddingRight = ''
    }
    setIsShow(bool)
  }

  function matrixFeatures (feature) {
    const matrix = {
      'FrostResistance': 'Морозоусточивы',
      'Anatomical': 'Анатомическая форма',
      'Shockproof': 'Противоударные',
      'Lightweight': 'Легкие',
      'OilProtection': 'Защита от нефти',
      'NonSlip': 'Не скользят',
      'ResistanceAcidsAlkalis': 'Устойчивость к кислотам и щелочам',
      'PunctureProtection': 'Защита от проколов',
      'Weatherproof': 'Влагозащищенные',
      'MinPromTorg': 'Одобрено Минпромторг',
      'ProtectionMehanicalDamaging': 'Защита от механических повреждающих факторов'
    }
    return matrix[feature]
  }

  return (
    <div className='CardBox'>
      <div className='SmallCard'>
        <div className='imgBox' onClick={() => setToggleCard(true)}>
          <img src={images('Products',props.product.image)} alt={props.product.name} />
          <div className='circle'></div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7991 8.83737L10.9664 1.55805C10.8025 1.4228 10.5729 1.39411 10.3803 1.48428C10.1877 1.57445 10.0647 1.77119 10.0647 1.98432V5.82072C5.77745 5.97647 2.83048 7.48889 1.29756 10.3211C-0.0222296 12.7639 -0.00993339 15.6576 0.00236275 17.5717V18.0144C0.00236275 18.2644 0.17041 18.4857 0.416333 18.5513C0.461419 18.5636 0.510603 18.5677 0.555689 18.5677C0.752427 18.5677 0.936869 18.4652 1.03524 18.289C4.0273 13.014 6.49063 12.7598 10.0606 12.7475V16.5716C10.0606 16.7848 10.1836 16.9815 10.3803 17.0717C10.577 17.1619 10.8025 17.1332 10.9705 16.9979L19.7991 9.694C19.9262 9.58743 20 9.43168 20 9.26773C20 9.10379 19.9262 8.94394 19.7991 8.83737ZM11.1714 15.3953V12.1942C11.1714 12.0467 11.114 11.9073 11.0074 11.8048C10.9049 11.7024 10.7615 11.6409 10.618 11.6409C8.38833 11.6409 6.67917 11.7024 5.01919 12.477C3.58464 13.1451 2.34273 14.2805 1.11721 16.0634C1.1664 14.4362 1.37953 12.4934 2.26895 10.8498C3.67891 8.24306 6.40865 6.95196 10.618 6.91507C10.9213 6.91097 11.1673 6.66505 11.1673 6.36175V3.15655L18.5736 9.26773L11.1714 15.3953Z" fill="#EC901C"/>
          </svg>
        </div>
        <div className='Info'>
          <h3>{props.product.name}</h3>
          <button onClick={() => setToggleCard(true)}>Узнать больше</button>
        </div>
      </div>
      {/* Большая карточка */}
      {
        isShow &&
        <div className='CardBackdrop'>
          <div className='Card' ref={ref}>
            <svg className='close' onClick={() => setToggleCard(false)} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.8995 4.10048C21.274 1.47498 17.713 -1.02558e-05 14 0C10.2869 1.02559e-05 6.72599 1.47502 4.10048 4.10054C1.47498 6.72605 -1.02558e-05 10.287 0 14.0001C1.02559e-05 17.7131 1.47502 21.274 4.10054 23.8995C6.72605 26.525 10.287 28 14.0001 28C17.7131 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.2869 26.525 6.72599 23.8995 4.10048ZM22.6621 22.6621C20.363 24.9561 17.2478 26.2443 14 26.2443C10.7522 26.2443 7.63707 24.9561 5.33795 22.6621C0.561708 17.8858 0.561708 10.1142 5.33795 5.3379C10.1142 0.561599 17.8858 0.561708 22.6621 5.3379C27.4384 10.1141 27.4383 17.8858 22.6621 22.6621ZM19.8778 9.35961L15.2374 14L19.7331 18.4957C19.8151 18.5767 19.8804 18.6732 19.925 18.7796C19.9696 18.886 19.9928 19.0001 19.9931 19.1155C19.9935 19.2308 19.971 19.3451 19.927 19.4517C19.883 19.5584 19.8184 19.6553 19.7368 19.7368C19.6553 19.8184 19.5584 19.883 19.4517 19.927C19.3451 19.971 19.2308 19.9935 19.1155 19.9931C19.0001 19.9928 18.886 19.9696 18.7796 19.925C18.6732 19.8804 18.5767 19.8151 18.4957 19.7331L14 15.2374L9.35961 19.8778C9.19491 20.0388 8.97333 20.1284 8.74296 20.1272C8.5126 20.1259 8.29204 20.0338 8.12914 19.8709C7.96625 19.708 7.87416 19.4874 7.87287 19.2571C7.87158 19.0267 7.96119 18.8051 8.12225 18.6404L12.7626 14L8.26696 9.50437C8.10451 9.33994 8.01372 9.11791 8.01442 8.88676C8.01513 8.65562 8.10726 8.43415 8.2707 8.2707C8.43415 8.10726 8.65562 8.01513 8.88676 8.01442C9.11791 8.01372 9.33994 8.10451 9.50437 8.26696L14 12.7626L18.6404 8.12225C18.8051 7.96119 19.0267 7.87158 19.2571 7.87287C19.4874 7.87416 19.708 7.96625 19.8709 8.12914C20.0338 8.29204 20.1259 8.5126 20.1272 8.74296C20.1284 8.97333 20.0388 9.19491 19.8778 9.35961Z" fill="#EC901C"/>
            </svg>
            <div className='col1'>
              {/* {
                props.product.features.find(el => el === 'MinPromTorg') &&
                <img className='MinPromTorg' src={images('Features','MinPromTorg')} alt={'Одобрено Минпромторг'} />
              } */}
              <img className='shoes' onClick={() => setFullImg(!fullImg)} src={images('Products',props.product.image)} alt={props.product.name} />
              <div className='features__Box'>
                <h4>Особенности</h4>
                {
                  props.product.features.map(feature => {
                    return(
                      <div className='feature' key={feature}>
                        <img src={vectors(feature)} alt={feature} />
                        <p>{' - ' + matrixFeatures(feature)}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='line'></div>
            <div className='col2'>
              <h4>{props.product.name}</h4>
              {
                props.product.properties.map(prop => {
                  return(<p key={prop.name}><span>{prop.name}</span>{prop.text}</p>)
                })
              }
              <p className='description'>{props.product.description}</p>
            </div>
            {fullImg &&
              <div className='fullImg__Backdrop' onClick={() => setFullImg(!fullImg)}>
                <div className='fullImg__Box'>
                  <img className='fullImg' src={images('Products',props.product.image)} alt={props.product.name} />
                </div>
              </div>
            }
          </div>
        </div>
      }
    </div>
  )
}
const images = (catalog, name) => {
  const img = new URL(`../assets/images/${catalog}/${name}.png`, import.meta.url).href
  return img || null
}

const vectors = name => {
  const img = new URL(`../assets/images/Features/${name}.svg`, import.meta.url).href
  return img || null
}

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
  })
  return { ref, isShow, setIsShow }
}

export default Card