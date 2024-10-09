import '../styles/Contacts.styl'
// import Form from './Form'

function Contacts() {
  function computedWidthMaps () {
    const screenWidth = window.screen.width
    if (screenWidth <= 900 ) return (screenWidth - 40) + 'px'
    else return '500px'

    // if (screenWidth < 584 && screenWidth > 488) return (screenWidth - 40) + 'px'
    // else if (screenWidth < 488) return (screenWidth - 40) + 'px'
    // else if (screenWidth >= 900) return '500px'
    // else return '100%'
    // if(window.innerWidth < 584 && window.innerWidth > 488) return (window.innerWidth - 40) + 'px'
    // if(window.innerWidth < 488) return (window.innerWidth - 40) + 'px'
  }
  return (
    <div className='contacts' id='Contacts'>

      <div className='contacts__wrp'>
        <div className='contacts__header'>
          <h2 className='header-section'>Контакты</h2>
          <p>Если у вас остались вопросы, свяжитесь с нами или оставьте свои данные в форме и мы проконсультируем вас.</p>
        </div>
        <div className='contacts__body'>
          <div className='contacts__text'>
            <a href="tel:+74955140050">
              <div className='iconBox'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1993_424)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M39.2686 35.1838C39.003 35.4486 38.6827 35.7872 38.343 36.1453C37.4955 37.0448 36.4368 38.1629 35.7732 38.6163C32.2818 41.0021 27.6109 39.8605 24.3069 38.4839C19.9484 36.6679 15.2031 33.3205 10.9424 29.0593C6.67773 24.7977 3.3307 20.051 1.51468 15.695C0.139683 12.3903 -1.0043 7.71844 1.38187 4.22625C1.835 3.56219 2.9557 2.50508 3.85398 1.65594C4.21336 1.31734 4.54929 0.997421 4.81492 0.732656C5.2865 0.263419 5.9247 0 6.58996 0C7.25522 0 7.89341 0.263419 8.365 0.732656L14.7891 7.15484C15.258 7.6264 15.5213 8.26443 15.5213 8.92949C15.5213 9.59456 15.258 10.2326 14.7891 10.7041L13.0391 12.4506C12.4546 13.0308 12.0731 13.7842 11.9514 14.5986C11.8296 15.4131 11.9741 16.2451 12.3634 16.9708C14.7704 21.5138 18.4864 25.2291 23.0298 27.6354C23.7553 28.0245 24.5872 28.1688 25.4014 28.0468C26.2156 27.9249 26.9686 27.5432 27.5484 26.9586L29.2941 25.212C29.7656 24.7428 30.4038 24.4794 31.0691 24.4794C31.7344 24.4794 32.3726 24.7428 32.8441 25.212L39.2686 31.6353C39.7376 32.1067 40.0009 32.7446 40.0009 33.4096C40.0009 34.0745 39.7376 34.7124 39.2686 35.1838Z" fill="#EC901C"/>
                </g>
              <defs>
              <clipPath id="clip0_1993_424">
              <rect width="40" height="40" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              </div>
              <p>
                <span>Телефон</span>
                +7 495 514-00-50
              </p>
            </a>
            <a href="mailto:info@sot.company">
              <div className='iconBox'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1993_420)">
                <path d="M18.0394 19.7949C19.0838 20.4912 20.9165 20.4913 21.9612 19.7948L21.9617 19.7945L39.7638 7.92633C39.1799 6.23757 37.5749 5.021 35.6902 5.021H4.31003C2.42525 5.021 0.820317 6.23757 0.236328 7.92633L18.0388 19.7945L18.0394 19.7949Z" fill="#EC901C"/>
                <path d="M23.2616 21.7444L23.261 21.7448C22.3468 22.3543 21.1732 22.6591 20 22.6591C18.8266 22.6591 17.6534 22.3544 16.7391 21.7448L16.7387 21.7445L0 10.5854V30.6694C0 33.0457 1.93337 34.979 4.30988 34.979H35.6903C38.0667 34.979 40 33.0457 40 30.6694V10.5854L23.2616 21.7444Z" fill="#EC901C"/>
                </g>
                <defs>
                <clipPath id="clip0_1993_420">
                <rect width="40" height="40" fill="white"/>
                </clipPath>
                </defs>
              </svg>
              </div>
              <p>
                <span>Email</span>
                info@sot.company
              </p>
            </a>
            <a href='#'>
              <div className='iconBox'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0002 0C12.0123 0 5.51367 6.49859 5.51367 14.4864C5.51367 24.3995 18.4777 38.9526 19.0296 39.5673C19.548 40.1447 20.4532 40.1437 20.9707 39.5673C21.5227 38.9526 34.4866 24.3995 34.4866 14.4864C34.4865 6.49859 27.988 0 20.0002 0ZM20.0002 21.7749C15.9812 21.7749 12.7117 18.5053 12.7117 14.4864C12.7117 10.4675 15.9813 7.19797 20.0002 7.19797C24.019 7.19797 27.2885 10.4676 27.2885 14.4865C27.2885 18.5054 24.019 21.7749 20.0002 21.7749Z" fill="#EC901C"/>
              </svg>
              </div>
              <p>
                <span>Адрес</span>
                127106, г. Москва, Нововладыкинский проезд, д. 8, стр. 4, офис 508
              </p>
            </a>
          </div>
          <div className='contacts__cart'>
            <iframe
              title='Яндекс Карты'
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A43a06d3f1bcc2fd2234c8a8dd043affa8b63b4012fe35fe844c69bd263a70fad&amp;source=constructor"
              width={computedWidthMaps()}
              height="400"
              frameBorder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts