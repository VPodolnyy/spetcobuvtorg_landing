import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

// import Breadcrumbs from "../components/Breadcrumbs"
// import products from '../assets/products/prodNew.json'
import { Button } from '@mui/material'
import logoCompany from '../assets/images/logoCompany.svg'
import '../styles/Header.styl'

const Header = () => {
  const navigate = useNavigate()
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header>
      <div className='container'>
        <Link to="/" replace={true}>
          <img src={logoCompany} alt="СпецОбувьТорг" />
        </Link>
        <nav style={toggleMenu ? {left: '0%'} : {left: '100%'}}>
          <Link onClick={() => {setToggleMenu(false)}} to="/catalog" replace={true}>Каталог</Link>
          <Link onClick={() => {setToggleMenu(false)}} to="/company" replace={true}>Компания</Link>
          <Link onClick={() => {
            setToggleMenu(false)
            window.scrollTo(0, 9999999999999)
          } }>Контакты</Link>
          <div className='groupLink'>
            <a href="tel:+74955140050">+7 495 514-00-50</a>
            <a className='mail' href="mailto:info@sot.company">info@sot.company</a>
          </div>
          <Button variant="contained" onClick={() => {
            setToggleMenu(false)
            navigate('/consultation')
          }
          }>Перезвонить мне</Button>
        </nav>
        <svg onClick={() => {setToggleMenu(!toggleMenu)}} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5743 0H5.55075C2.49009 0 0 2.49009 0 5.55075V16.5743C0 19.6349 2.49009 22.125 5.55075 22.125H16.5743C19.6349 22.125 22.125 19.6349 22.125 16.5743V5.55075C22.125 2.49009 19.6349 0 16.5743 0ZM18.375 16.5743C18.375 17.5672 17.5672 18.375 16.5743 18.375H5.55075C4.55784 18.375 3.75 17.5672 3.75 16.5743V5.55075C3.75 4.55784 4.55784 3.75 5.55075 3.75H16.5743C17.5672 3.75 18.375 4.55784 18.375 5.55075V16.5743ZM42.375 0H31.5C28.3984 0 25.875 2.52338 25.875 5.625V16.5C25.875 19.6016 28.3984 22.125 31.5 22.125H42.375C45.4766 22.125 48 19.6016 48 16.5V5.625C48 2.52338 45.4766 0 42.375 0ZM44.25 16.5C44.25 17.5339 43.4089 18.375 42.375 18.375H31.5C30.4661 18.375 29.625 17.5339 29.625 16.5V5.625C29.625 4.59113 30.4661 3.75 31.5 3.75H42.375C43.4089 3.75 44.25 4.59113 44.25 5.625V16.5ZM16.5743 25.875H5.55075C2.49009 25.875 0 28.3651 0 31.4258V42.4492C0 45.5099 2.49009 48 5.55075 48H16.5743C19.6349 48 22.125 45.5099 22.125 42.4492V31.4258C22.125 28.3651 19.6349 25.875 16.5743 25.875ZM18.375 42.4492C18.375 43.4422 17.5672 44.25 16.5743 44.25H5.55075C4.55784 44.25 3.75 43.4422 3.75 42.4492V31.4258C3.75 30.4328 4.55784 29.625 5.55075 29.625H16.5743C17.5672 29.625 18.375 30.4328 18.375 31.4258V42.4492ZM42.375 25.875H31.5C28.3984 25.875 25.875 28.3984 25.875 31.5V42.375C25.875 45.4766 28.3984 48 31.5 48H42.375C45.4766 48 48 45.4766 48 42.375V31.5C48 28.3984 45.4766 25.875 42.375 25.875ZM44.25 42.375C44.25 43.4089 43.4089 44.25 42.375 44.25H31.5C30.4661 44.25 29.625 43.4089 29.625 42.375V31.5C29.625 30.4661 30.4661 29.625 31.5 29.625H42.375C43.4089 29.625 44.25 30.4661 44.25 31.5V42.375Z" fill="#EC901C"/>
        </svg>
      </div>
    </header>
  )
}

export default Header