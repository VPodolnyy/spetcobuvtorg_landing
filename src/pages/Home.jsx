import '../styles/App.styl'
import { useParams, Link } from "react-router-dom"
import { useEffect, useRef } from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { GeneralSlider, ConfidenceSlider, CompanySlider } from '../components/Slider'
import Wrapper from '../components/Wrapper'
import Contacts from '../components/Contacts'
import Form from '../components/Form'

import Production from '../assets/images/Production.svg'
import Guarantees from '../assets/images/Guarantees.svg'
import Vendor from '../assets/images/Vendor.svg'

function HomePage() {
  const params = useParams()
  const blocks = {
    consultation: useRef(null),
    company: useRef(null)
  }
  const scrollToBlock = (block = "") => {
    if (block in blocks) {
      blocks[block].current.scrollIntoView({
        behavior: "smooth"
      })
    }
  }
  useEffect(() => {
    scrollToBlock(params.block);
  }, [params])
  document.addEventListener('scroll', () => {
    let blocks = document.querySelectorAll('.in-viewport')
    function checkBlocksVisibility() {
      blocks.forEach(block => {
        let blockPosition = block.getBoundingClientRect().top
        if (blockPosition <= 500) {
          block.style.opacity = "1"
          block.style.transform = "translateY(0)"
        }
      })
    }
    checkBlocksVisibility()
    window.addEventListener('scroll', function() {
      checkBlocksVisibility()
    })
  })
  return (
    <ThemeProvider theme={theme}>
    <Wrapper>
    <div className='App' id='Home'>
      <div className='carousel-container'>
        <h1>Специализированная обувь,<br /> защищенная от производственных рисков</h1>
        <GeneralSlider />
      </div>
      <div className='benefits'>
        <ul>
          <li><img src={Production} alt="" /> Собственное производство</li>
          <li><img src={Guarantees} alt="" /> Гарантии качества</li>
          <li><img src={Vendor} alt="" /> Надежный поставщик</li>
        </ul>
      </div>
      <div className='products' id='Products'>
        <div className='products__wrp'>
          <h2 className='header-section'>Каталог</h2>
          <p className='description-section'>Компания СпецОбувьТорг производит высокотехнологичную и удобную обувь из полимерных
            материалов, отвечающую самым строгим требованиям безопасности и качества. Создавая нашу
            продукцию, мы непрерывно продолжаем совершенствовать её, отвечая каждому новому вызову,
            брошенному нашим клиентам самыми неблагоприятными и жесткими условиями труда.</p>
          <div className="container-subGroup">
            <section className='in-viewport'>
              <div className='column img-box' style={{ backgroundImage: `url(${imgSrc('catalogPvc')}` }}></div>
              <div className='column text-box'>
                <h4>Обувь из поливинилхлорида</h4>
                <p>Поливинилхлорид (ПВХ) – это термопластичный материал. Обувь из микрогранул ПВХ
                  производится литьевым способом под высоким давлением. Все компоненты обуви закреплены
                  литьевым бесшовным способом, что дает превосходную защиту от влаги и вредных химических
                  факторов. Данная обувь может использоваться как в бытовых целях, так и в нефтегазовых,
                  химических и пищевых отраслях.</p>
                <Link to="/catalog/pvc" reloadDocument>В каталог</Link>
              </div>
            </section>
            <section className='revert in-viewport'>
              <div className='column img-box' style={{ backgroundImage: `url(${imgSrc('catalogPu')}` }}></div>
              <div className='column text-box'>
                <h4>Обувь из полиуретана</h4>
                <p>Полиуретан (ПУ) - это материал, который создается путем соединения двух полимеров. При
                  смешивании, они образуют пузырьки воздуха. Полиуретан легкий и гибкий материал, который
                  обладает хорошими эксплуатационными свойствами. Он более устойчив к истиранию,
                  долговечен, отличается высокой теплоизоляцией за счет своей пористой структуры. Обувь из
                  полиуретана рекомендована к использованию в горнодобывающей промышленности.</p>
                <Link to="/catalog/pu" reloadDocument>В каталог</Link>
              </div>
            </section>
            <section className='in-viewport'>
              <div className='column img-box' style={{ backgroundImage: `url(${imgSrc('catalogWinter')}` }}></div>
              <div className='column text-box'>
                <h4>Зимняя обувь</h4>
                <p>Компания СпецОбувьТорг производит широкий ассортимент зимней обуви. Полимерные
                  материалы, используемые при производстве основы обуви, в комбинации с
                  высокотехнологичными многослойными утепляющими чулками, позволяют использовать нашу
                  продукцию даже в условиях экстремально низких температур, сохраняя защитные свойства
                  против самых агрессивных воздействий.</p>
                <Link to="/catalog/winter" reloadDocument>В каталог</Link>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className='sectionSeparator'><div className='separator__container'></div></div>
      {/* Преимущества */}
      <div className='advantages'>
        <div className='advantages__container'>
          <h2 className='header-section'>Преимущества</h2>
          <div className='advantages__block'>
            <div className='col'>
              <span>СДЕЛАНО В РОССИИ</span>
              <p>Собственное производство</p>
            </div>
            <div className='col'>
              <span>НАЛИЧИЕ НА СКЛАДЕ</span>
              <p>Постоянная доступность товара на складе</p>
            </div>
            <div className='col'>
              <span>ТЕХНОЛОГИЧНО</span>
              <p>Защита и комфорт – наши приоритеты</p>
            </div>
          </div>
        </div>
      </div>
      <div className='consultation' id='consultation' ref={blocks.consultation}>
        <div className='consultation__wrp'>
          <div className='consultation__text'>
            <h2>Перезвоните мне</h2>
            <p>Мы сделаем лучшее предложение.<br />Оставьте заявку и мы перезвоним вам в течение 15 минут и ответим на все ваши вопросы.</p>
          </div>
          <Form />
        </div>
      </div>

      <div className='company' id='Company' ref={blocks.company}>
        <div className='company__wrp'>
          <div className='company__header'>
            <h2 className='header-section'>Компания</h2>
            <p>Компания «Спецобувьторг» работает в секторе защитной обуви, спецодежды и СИЗ с 2002 года.</p>
          </div>
          <CompanySlider />
        </div>
      </div>

      <div className='sectionSeparator'><div className='separator__container'></div></div>

      {/* Достижения */}
      <div className='achievements'>
        <div className='achievements__container'>
          <h2 className='header-section'>Достижения</h2>
          <div className='achievements__block'>
            <div className='col'>
              <span>&gt; 20</span>
              <p>Лет на рынке спецобуви и СИЗ</p>
            </div>
            <div className='col'>
              <span>&gt; 500 000</span>
              <p>Пар обуви производится и поставляется нашим заказчикам ежегодно</p>
            </div>
            <div className='col'>
              <span>&gt; 300</span>
              <p>Компаний по всей России и СНГ выбрали именно нашу продукцию</p>
            </div>
          </div>
        </div>
      </div>

      <div className='sectionSeparator'><div className='separator__container'></div></div>

      {/* Clients */}
      <div className='confidence'>
        <div className='confidence__container'>
          <h2 className='header-section'>Нам доверяют</h2>
          <p>Гарантируем качество и заявленные характеристики.<br />Наша продукция проверена самыми суровыми условиями.</p>
          <ConfidenceSlider />
        </div>
      </div>

      <div className='sectionSeparator'><div className='separator__container'></div></div>

      {/* <Reviews /> */}
    </div>
    <Contacts />
    </Wrapper>
    </ThemeProvider>
  )
}

const theme = createTheme({
  palette: {
    primary: { main: "#ec901c" }
  }
})

const imgSrc = name => {
  const img = new URL(`../assets/images/${name}.webp`, import.meta.url).href
  return img || null
}
export default HomePage