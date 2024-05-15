// import Carousel from "nuka-carousel"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../styles/Slider.styl'

import { Link } from "react-router-dom"

export const GeneralSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: slidesToShow(),
    slidesToScroll: 1,
    // lazyLoad: true,
    centerPadding: "160px",
    className: "center",
    // focusOnSelect: true,
    swipeToSlide: true,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  function slidesToShow () {
    const widthScreen = window.innerWidth
    if (widthScreen > 1024) return 3
    else if (widthScreen > 768) return 2
    else return 1
  }

  return (
    <Slider {...settings}>
      <Link to="/catalog/pvc/artel" className="slide">
        <div className="background" style={{ backgroundImage: `url(${imgSrc('artel-back')}` }}></div>
        <img src={imgSrc('artel')} />
        <h5>Артель</h5>
      </Link>
      <Link to="/catalog/pvc/artel-fish" className="slide">
        <div className="background" style={{ backgroundImage: `url(${imgSrc('artel-fish-back')}` }}></div>
        <img src={imgSrc('artel-fish')} />
        <h5>Рыбацкая Артель</h5>
      </Link>
      <Link to="/catalog/pu/grafit" className="slide">
        <div className="background" style={{ backgroundImage: `url(${imgSrc('grafit-back')}` }}></div>
        <img src={imgSrc('grafit')} />
        <h5>Графит</h5>
      </Link>
      <Link to="/catalog/winter/morozko" className="slide">
        <div className="background" style={{ backgroundImage: `url(${imgSrc('morozko-back')}` }}></div>
        <img src={imgSrc('morozko')} />
        <h5>MOROZKO</h5>
      </Link>
      <Link to="/catalog/pvc/artel-pro" className="slide">
        <div className="background" style={{ backgroundImage: `url(${imgSrc('artel-pro-back')}` }}></div>
        <img src={imgSrc('artel-pro')} />
        <h5>Артель PRO</h5>
      </Link>
      <Link to="/catalog/winter/artica" className="slide">
        <div className="background" style={{ backgroundImage: `url(${imgSrc('artica-back')}` }}></div>
        <img src={imgSrc('artica')} />
        <h5>Артика</h5>
      </Link>
      <Link to="/catalog/pvc/artel-fish-pro" className="slide">
        <div className="background" style={{ backgroundImage: `url(${imgSrc('artel-fish-pro-back')}` }}></div>
        <img src={imgSrc('artel-fish-pro')} />
        <h5>Рыбацкая Артель PRO</h5>
      </Link>
    </Slider>
  )
}

export const ConfidenceSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: slidesToShow(),
    slidesToScroll: 1,
    // lazyLoad: true,
    // centerPadding: "160px",
    className: "ConfidenceSlider",
    focusOnSelect: true,
    swipeToSlide: true,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 0,
    nextArrow: <></>,
    prevArrow: <></>
  }
  function slidesToShow () {
    const widthScreen = window.innerWidth
    if (widthScreen > 700) return 4
    else if (widthScreen > 600) return 3
    else if (widthScreen > 500) return 2
    else return 1
  }
  return (

    <Slider {...settings}>
      <div className="confidence__item">
        <div className=".confidence__item-img">
          <img src={imgSrc('osnova')} />
        </div>
      </div>
      <div className="confidence__item">
        <div className=".confidence__item-img">
          <img src={imgSrc('alrosa')} />
        </div>
      </div>
      <div className="confidence__item">
        <div className=".confidence__item-img">
          <img src={imgSrc('gazprom-neft')} />
        </div>
      </div>
      <div className="confidence__item">
        <div className=".confidence__item-img">
          <img src={imgSrc('rosneft')} />
        </div>
      </div>
      <div className="confidence__item">
        <div className=".confidence__item-img">
          <img src={imgSrc('gazprom')} />
        </div>
      </div>
      <div className="confidence__item">
        <div className=".confidence__item-img">
          <img src={imgSrc('tomskneft')} />
        </div>
      </div>
      <div className="confidence__item">
        <div className=".confidence__item-img">
          <img src={imgSrc('slavneft')} />
        </div>
      </div>
      <div className="confidence__item">
        <div className=".confidence__item-img">
          <img src={imgSrc('lukoil')} />
        </div>
      </div>
      <div className="confidence__item">
        <div className=".confidence__item-img">
          <img src={imgSrc('sibur')} />
        </div>
      </div>
      <div className="confidence__item">
        <div className=".confidence__item-img">
          <img src={imgSrc('suek')} />
        </div>
      </div>
      <div className="confidence__item">
        <div className=".confidence__item-img">
          <img src={imgSrc('bashneft')} />
        </div>
      </div>
    </Slider>
  )
}

export const CompanySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // lazyLoad: true,
    // centerPadding: "160px",
    className: "companySlider",
    focusOnSelect: true,
    swipeToSlide: true,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 20000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  return (

    <Slider {...settings}>
      <div className="company__item backImg1">
        <div className="company__item-textBox">
          <p>За плечами нашей компании многолетний опыт реализаций самых сложных проектов требовавших полное обеспечение сотрудников предприятий всеми необходимыми средствами индивидуальной защиты. Благодаря этому наша компания занимает лидирующую позицию в области комплексных поставок спецобуви, спецодежды и СИЗ.</p>
        </div>
      </div>
      <div className="company__item backImg2">
        <div className="company__item-textBox">
          <p>Удобная и надежная спецобувь – важный элемент комфортной работы профессионалов самых разных областей: строителей, газовиков, нефтехимиков, металлургов, дорожных рабочих, сотрудников охранных структур и т.д.</p>
        </div>
      </div>
      <div className="company__item backImg3">
        <div className="company__item-textBox">
          <p>Компания «Спецобувьторг» обеспечивает широкий ассортимент защитной обуви. Производимая продукция соответствует прочностным требованиям предъявляемым к спецобуви: удобна, надежна и долговечна. При создании обуви мы учли разрушительные воздействия, которые возникают в процессе носки в неблагоприятных условиях.</p>
        </div>
      </div>
      <div className="company__item backImg4">
        <div className="company__item-textBox">
          <p>Приоритетная задача нашей компании предложить клиентам максимальный уровень защиты от вредных факторов производства. Для создания обуви мы применяем только высококачественные материалы, современные технологии. Наши фабрики оснащены современным оборудованием ведущих мировых фирм: PFAFF (Германия); MAIN GROUP и OTTOGALLI (Италия). Обязательная сертификация всей продукции даёт нам основание заявлять о том, что мы поставляем комфортную продукцию высокого качества, отвечающую высоким требованиям безопасности.</p>
        </div>
      </div>
    </Slider>
  )
}
const imgSrc = name => {
  const img = new URL(`../assets/images/Slider/${name}.webp`, import.meta.url).href
  return img || null
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      className={className}
      style={{ ...style }}
      onClick={onClick}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M35.2125 23.6266L26.3734 14.7875C25.7625 14.1766 24.7735 14.1766 24.1641 14.7875C23.5532 15.3984 23.5532 16.3875 24.1641 16.9969L30.6032 23.4375H14.0625C13.2 23.4375 12.5 24.1375 12.5 25C12.5 25.8625 13.2 26.5625 14.0625 26.5625H30.6031L24.1641 33.0016C23.5531 33.6125 23.5531 34.6016 24.1641 35.2109C24.775 35.8219 25.7641 35.8219 26.3734 35.2109L35.2124 26.3719C35.5874 25.9969 35.703 25.4844 35.6187 24.9984C35.7031 24.5156 35.5859 24.0016 35.2125 23.6266ZM25 0C11.1922 0 0 11.1922 0 25C0 38.8078 11.1922 50 25 50C38.8078 50 50 38.8062 50 25C50 11.1938 38.8078 0 25 0ZM25 46.875C12.9187 46.875 3.125 37.0813 3.125 25C3.125 12.9187 12.9187 3.125 25 3.125C37.0813 3.125 46.875 12.9187 46.875 25C46.875 37.0813 37.0813 46.875 25 46.875Z" fill="#EC901C"/>
    </svg>
    // <div
      // className={className}
      // style={{ ...style, display: "block", background: "red" }}
      // onClick={onClick}
    // />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
    className={className}
    style={{ ...style }}
    onClick={onClick}
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7875 26.3734L23.6266 35.2125C24.2375 35.8234 25.2265 35.8234 25.8359 35.2125C26.4468 34.6016 26.4468 33.6125 25.8359 33.0031L19.3968 26.5625L35.9375 26.5625C36.8 26.5625 37.5 25.8625 37.5 25C37.5 24.1375 36.8 23.4375 35.9375 23.4375L19.3969 23.4375L25.8359 16.9984C26.4469 16.3875 26.4469 15.3984 25.836 14.7891C25.225 14.1781 24.2359 14.1781 23.6266 14.7891L14.7876 23.6281C14.4126 24.0031 14.297 24.5156 14.3813 25.0015C14.2969 25.4844 14.4141 25.9984 14.7875 26.3734ZM25 50C38.8078 50 50 38.8078 50 25C50 11.1922 38.8078 -9.78449e-07 25 -2.18557e-06C11.1922 -3.39269e-06 3.39255e-06 11.1938 2.18557e-06 25C9.78592e-07 38.8062 11.1922 50 25 50ZM25 3.125C37.0813 3.125 46.875 12.9187 46.875 25C46.875 37.0813 37.0813 46.875 25 46.875C12.9187 46.875 3.125 37.0813 3.125 25C3.125 12.9187 12.9187 3.125 25 3.125Z" fill="#EC901C"/>
    </svg>
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "green" }}
    //   onClick={onClick}
    // />
  );
}


export default GeneralSlider