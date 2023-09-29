import '../styles/Contacts.styl'

function Contacts() {
  function computedWidthMaps () {
    if(window.innerWidth >= 800) return '720px'
    if(window.innerWidth < 584 && window.innerWidth > 488) return (window.innerWidth - 40) + 'px'
    if(window.innerWidth < 488) return (window.innerWidth - 40) + 'px'
}
  return (
    <div className='contacts' id='Contacts'>
      <div className='contacts__wrp'>
        <div className='contacts__text'>
          <h2>Контакты</h2>
          <a href="tel:+74955140050">+7 495 514-00-50</a>
          <a href="mailto:info@sot.company">info@sot.company</a>
          <p>127106, г. Москва, Нововладыкинский проезд, д. 8, стр. 5, офис 019</p>
        </div>
        <div className='contacts__cart'>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A43a06d3f1bcc2fd2234c8a8dd043affa8b63b4012fe35fe844c69bd263a70fad&amp;source=constructor"
            width={computedWidthMaps()} height="400" frameBorder="0"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contacts