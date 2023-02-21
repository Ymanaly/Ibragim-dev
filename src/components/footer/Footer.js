import React from 'react'
import youtube from '././../../img/youtube.png'
import facebook from './../../img/facebook.png'
import instagram from './../../img/insta.png'
import logotip from './../../img/GFIT.png'



import classes from './../../style/footer.module.css'
function Footer() {
  return (
    <div className={classes.page}>
      <div className={classes.footer}>
        <div className={classes.footer__title}>
            <span ><a href='#'>Попробовать бесплатно</a></span>
            <span><a href='#'>Помощь</a></span>
            <span><a href='#'>Конфиденциальность</a></span>
        </div>
        <div className={classes.footer__links}>
            <div>
                <a href='#'><img src={youtube}/></a>
            </div>
            <div>
            <a href='#'><img src={facebook}/></a>
            </div>
            <div>
            <a href='#'><img src={instagram}/></a>
            </div>
        </div>
        <div className={classes.footer__icon}>
            <span>Будь лучшим!</span>
            <div>
                <img src={logotip} alt="logo"/>
            </div>
            <span>© 2023 G-Fit . Все права защищены.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
