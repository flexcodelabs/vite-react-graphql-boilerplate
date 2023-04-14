import React from 'react'
import style from './footer.module.sass'
function Footer() {
  return (
    <div className={`${style.footer} bg-rose-500`}>
      <h2 className=''>Start perfecting your skills today</h2>
      <p>
        Practicing is the best way to help you get better at your
        craft and proompts provides you with challenges to keep your
        practicing consistent.
      </p>

      <a href='' className='text-rose-500 btn btn-secondary '>
        Signup
      </a>
    </div>
  )
}

export default Footer
