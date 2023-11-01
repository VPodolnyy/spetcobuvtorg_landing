import { useState } from 'react'
import logoCompany from '../assets/images/logoCompany.svg'
import '../styles/Header.styl'
function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header>
      <div className='container'>
        <div>
          <img src={logoCompany} alt="СпецОбувьТорг" />
        </div>
        <nav style={toggleMenu ? {left: '0%'} : {left: '100%'}}>
          <a onClick={() => {setToggleMenu(false)}} href="#Home">Главная</a>
          <a onClick={() => {setToggleMenu(false)}} href="#Products">Продукция</a>
          <a onClick={() => {setToggleMenu(false)}} href="#Company">О нас</a>
          <a onClick={() => {setToggleMenu(false)}} href="#Contacts">Контакты</a>
        </nav>
        <svg onClick={() => {setToggleMenu(!toggleMenu)}} width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.125 23.2501H1.87501C0.839435 23.2501 0 22.4106 0 21.3751C0 20.3396 0.839435 19.5001 1.87501 19.5001H28.1251C29.1606 19.5001 30.0001 20.3396 30.0001 21.3751C30 22.4106 29.1606 23.2501 28.125 23.2501ZM28.125 13.875H1.87501C0.839435 13.875 0 13.0356 0 12.0001C0 10.9646 0.839435 10.1251 1.87501 10.1251H28.1251C29.1606 10.1251 30.0001 10.9645 30.0001 12.0001C30.0001 13.0357 29.1606 13.875 28.125 13.875ZM28.125 4.50002H1.87501C0.839435 4.50002 0 3.66059 0 2.62501C0 1.58944 0.839435 0.75 1.87501 0.75H28.1251C29.1606 0.75 30.0001 1.58944 30.0001 2.62501C30.0001 3.66059 29.1606 4.50002 28.125 4.50002Z" fill="black"/>
        </svg>
      </div>
    </header>
  )
}

export default Header