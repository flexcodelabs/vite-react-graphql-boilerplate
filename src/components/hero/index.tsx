import React from 'react'
import Illustration from '../../assets/Illustration/casual-life-3d-three-quarter-view-of-young-woman-working-on-laptop_result.png'
import style from './hero.module.sass'

function Hero() {
  return (
    <div className={`${style.hero} pt-100`}>
      <div className={style.hero_content__container}>
        <h1 className='heading'>
          Improve your craft by solving creative prompts
        </h1>
        <div className={style.content}>
          <p>
            Whether you are a writer, a graphic designer, an animator,
            or any kind of digital creator proompts will provide you
            with creative prompts to help you improve your skills and
            a platform to share your solutions with your peers.
          </p>
          <div className={style.cta}>
            {/* <a className={`btn`}>Get Started</a> */}
            <a href='' className='text-rose-500'>Explore Prompts </a>
          </div>
        </div>
      </div>

      <div className={style.illustration}>
        <img
          src={Illustration}
          alt=''
          className={style.illustration_image}
        />
      </div>
    </div>
  )
}

export default Hero
