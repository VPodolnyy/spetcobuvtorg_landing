import { useParams, Link } from "react-router-dom"
import products from '../assets/products/prodNew.json'
import Card from "../components/Card"
import Contacts from '../components/Contacts'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Wrapper from '../components/Wrapper'

import '../styles/Catalog.styl'

const Catalog = () => {
  const { group, subGroup, id } = useParams()
  const listGroups = ['pvc', 'pu', 'winter']
  const listSubGroups = ['artel', 'artel-pro', 'artel-fish', 'artel-fish-pro', 'grafit', 'grafit-pro', 'artica', 'morozko']

  const groupAllowed = listGroups.includes(group)
  const subGroupAllowed = listSubGroups.includes(subGroup) && products[group].subGroup[subGroup]
  const idAllowed = groupAllowed && subGroupAllowed && products[group].subGroup[subGroup].models[id]

  function computedComponent () {

    if ( groupAllowed && subGroupAllowed && idAllowed) {
      return <Card product={products[group].subGroup[subGroup].models[id]} id={id}/>

    } else if ( groupAllowed && subGroupAllowed ) {
      const keysModels = Object.keys(products[group].subGroup[subGroup].models)
      const subGroupData = products[group].subGroup[subGroup]
      return <div className="container-group">
        <h2>{subGroupData.header}</h2>
        <h4 dangerouslySetInnerHTML = {{ __html: subGroupData.description }} ></h4>
        <div className="container-subGroup">
          {keysModels.map(key => {
            return (
              <section key={key}>
              <div className='column img-box'>
                <img src={imagesModels(key)} />
              </div>
              <div className='column text-box'>
                <h4>{subGroupData.models[key].name} <br /> арт. {subGroupData.models[key].id}</h4>
                <p dangerouslySetInnerHTML = {{ __html: subGroupData.models[key].descriptionMin }} ></p>
                <Link to={`/catalog/${group}/${subGroup}/${key}`} reloadDocument>К модели</Link>
              </div>
            </section>
            )
          })}
        </div>
      </div>

    } else if ( groupAllowed ) {
      const keysSubgroup = Object.keys(products[group].subGroup)
      return <div className="container-group">
        <h2>{products[group].header}</h2>
        <h4>{products[group].description}</h4>
        <div className="container-subGroup">
          {keysSubgroup.map(key => {
            return (
              <section key={key}>
                <div className='column img-box'>
                  <img src={imagesGroup(key)} />
                </div>
                <div className='column text-box'>
                  <h4>{products[group].subGroup[key].header}</h4>
                  <p dangerouslySetInnerHTML = {{ __html: products[group].subGroup[key].description }} ></p>
                  <Link to={`/catalog/${group}/${key}`} reloadDocument>В каталог</Link>
                </div>
              </section>
            )
          })}
        </div>
      </div>

    } else {
      return <div className="container-group-catalog">
        <section>
          <div className='column img-box' style={{ backgroundImage: `url(${imgSrc('catalogPvc')}` }}>
          </div>
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
        <section>
          <div className='column img-box' style={{ backgroundImage: `url(${imgSrc('catalogPu')}` }}>
          </div>
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
        <section>
          <div className='column img-box' style={{ backgroundImage: `url(${imgSrc('catalogWinter')}` }}>
          </div>
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
    }
  }
  return (
    <ThemeProvider theme={theme}>
    <Wrapper>
      { computedComponent() }
    <Contacts />
    </Wrapper>
    </ThemeProvider>
  )
}

export default Catalog

// TODO
// Хлебные крошки
// Кнопка "Назад (в группы, подгруппы, каталог"

const imagesGroup = name => {
  const img = new URL(`../assets/images/Products/Group/${name}.png`, import.meta.url).href
  return img || null
}

const imagesModels = name => {
  const img = new URL(`../assets/images/Products/${name}/1.png`, import.meta.url).href
  return img || null
}

const imgSrc = name => {
  const img = new URL(`../assets/images/${name}.webp`, import.meta.url).href
  return img || null
}

const theme = createTheme({
  palette: {
    primary: { main: "#ec901c" }
  }
})