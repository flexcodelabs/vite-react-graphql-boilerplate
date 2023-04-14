import React from 'react'
import Logo from "../../assets/images/logo.png"
import style from "./header.module.sass"
function Header() {
  return (
    <div className={`${style.header} pt-50`}>
        <div className="logo">
            <img src={Logo} alt=""/>
        </div>
        <div className={style.cta}>
            <button className='btn btn-secondary'>
                Signin
            </button>
            <button className='btn'>
                Singup
            </button>
        </div>
    </div>
  )
}

export default Header