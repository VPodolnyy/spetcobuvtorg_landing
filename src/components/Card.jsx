import '../styles/Card.styl'
import { useState } from 'react'

import ImgGlass from './imgGlass.jsx'

const Card = ({ product, id }) => {
  const [image, setImage] = useState(product.image[0])

  function matrixFeatures (feature) {
    const matrix = {
      'FrostResistance': 'Морозоусточивы',
      'Anatomical': 'Анатомическая форма',
      'Shockproof': 'Защита от ударов в носочной части',
      'Lightweight': 'Легкие',
      'OilProtection': 'Защита от нефти',
      'NonSlip': 'Не скользят',
      'ResistanceAcidsAlkalis': 'Устойчивость к кислотам и щелочам',
      'PunctureProtection': 'Защита от прокола подошвы',
      'Weatherproof': 'Влагозащищенные',
      'MinPromTorg': 'Одобрено Минпромторг',
      'ProtectionMehanicalDamaging': 'Защита от механических повреждающих факторов',
      'Insulated': 'Утепленные'
    }
    return matrix[feature]
  }

  return (
    <div className='Card'>
      
      <div className='leftCol'>
        <div className='imgBox'>
          <div className='listImages'>
            {
              product.image.map(img => {
                if (img === image) return
                return (
                  <div className='microImg' key={img} >
                    <img onClick={() => setImage(img)} src={images(`Products/${id}`, img)} alt={img} />
                  </div>
                )})}
          </div>
          <ImgGlass imgSrc={images(`Products/${id}`, image)} imgId={id} />
        </div>
        <div className='features'>
          <h4>Особенности</h4>
          { product.features.map(feature => {
              return(
                <div className='feature' key={feature}>
                  <img src={vectors(feature)} alt={feature} />
                  <p>{' - ' + matrixFeatures(feature)}</p>
                </div>
              )})}
        </div>
      </div>

      <div className='infoBox'>
        <span>артикул {product.id}</span>
        <h2>{product.name}</h2>
        <p dangerouslySetInnerHTML = {{ __html: product.description }} ></p>
        {product.aspects &&
          <div className='aspects'>
            <h4>Комплектация</h4>
            { product.aspects.map(aspect => {
              return(
                <div key={aspect.name}>
                  <span>- {aspect.name}: </span>
                  <p>{aspect.description}</p>
                </div>
              )})}
          </div>
        }
        <div className='characteristics'>
          <h4>Характеристики</h4>
          {
            product.properties.map(prop => {
              return(<p key={prop.name}><span>{prop.name}</span>{prop.text}</p>)
            })
          }
        </div>
      </div>
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

export default Card