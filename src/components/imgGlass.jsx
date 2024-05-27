import { useEffect } from 'react'
import '../styles/imgGlass.styl'


const imgGlass = ({imgSrc, imgId}) => {
  var glass
  // useEffect(() => {
  //   magnify(imgId, 3)
  // }, [])
  // useEffect(() => {

  //   const img = document.getElementById(imgId)
  //   if (imgId)
  //   magnify(imgId, 3)
  // }, [imgId])

  return (
    <div className="img-magnifier-container"
      onMouseEnter={() => magnify(imgId, 2)}
      onMouseLeave={() => clearGlass()}
    >
      {/* <img id="myimage" src="img_girl.jpg" width="600" height="400" alt="" /> */}
      <img
      id={imgId}
      src={imgSrc}
      // onClick={() => magnify(imgId, 3)}
      // onMouseLeave={() => clearGlass()}
      />
    </div>
  )

  function clearGlass () {
    if (glass) {
      console.log(glass)
      glass.remove()
    }
  }
  
  function magnify(imgID, zoom) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return
    var w, h, bw;
    var img = document.getElementById(imgID);
  
    if (!document.getElementsByClassName('img-magnifier-glass').length) {
      /* Создать увеличительное стекло: */
      glass = document.createElement("DIV");
      glass.setAttribute("class", "img-magnifier-glass")
      /* Вставить увеличительное стекло: */
      img.parentElement.insertBefore(glass, img);
    }
    // glass.style.display = 'block'
  
    /* Установите свойства фона для стекла лупы: */
    glass.style.backgroundImage = `url(${img.src})`
    glass.style.backgroundRepeat = "no-repeat"
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px"
    bw = 3
    w = glass.offsetWidth / 2
    h = glass.offsetHeight / 2
  
    /* Выполните функцию, когда кто-то перемещает лупу по изображению: */
    glass.addEventListener("mousemove", moveMagnifier)
    img.addEventListener("mousemove", moveMagnifier)
  
    /* а также для сенсорных экранов: */
    // glass.addEventListener("touchmove", moveMagnifier)
    // img.addEventListener("touchmove", moveMagnifier)
  
    function moveMagnifier(e) {
      
      const img = document.getElementById(imgID)
      const imgGlass = glass.style.backgroundImage
      const tryImg = `url(${img.src})`
      if (tryImg !== imgGlass) {
        glass.style.backgroundImage = `url(${img.src})`
      }

      /* Предотвратите любые другие действия, которые могут возникнуть при перемещении по изображению */
      e.preventDefault()
      /* Получить позиции курсора x и y: */
      const pos = getCursorPos(e);
      let x = pos.x
      let y = pos.y
      if (x < 0 || y < 0 || x > img.width || y > img.height) {
        glass.remove()
        glass.removeEventListener("mousemove", moveMagnifier)
        img.removeEventListener("mousemove", moveMagnifier)
      }

      /* Не допускайте, чтобы лупа находилась вне изображения: */

      if (x > img.width - (w / zoom)) {
        x = img.width - (w / zoom)
      }
      if (x < w / zoom) {
        x = w / zoom
      }
      if (y > img.height - (h / zoom)) {
        y = img.height - (h / zoom)
      }
      if (y < h / zoom) {
        y = h / zoom
      }

      /* Установите положение стекла лупы: */
      glass.style.left = (x - w) + "px"
      glass.style.top = (y - h) + "px"

      /* Покажите, что такое увеличительное стекло "смотреть": */
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px"
    }
  
    function getCursorPos(e) {
      let x = 0
      let y = 0
      /* Получить x и y позиции изображения: */
      const a = img.getBoundingClientRect()
      /* Вычислите координаты курсора x и y относительно изображения: */
      if (e.targetTouches) {
        x = e.targetTouches[0].pageX - a.left
        y = e.targetTouches[0].pageY - a.left
      } else {
        x = e.pageX - a.left
        y = e.pageY - a.top
      }
      /* Consider any page scrolling: */
      x = x - window.pageXOffset
      y = y - window.pageYOffset
      return {x : x, y : y}
    }
  }
}


export default imgGlass