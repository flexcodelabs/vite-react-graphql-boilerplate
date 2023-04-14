import illustration2 from '../assets/Illustration/casual-life-3d-girl-and-boy-sitting-with-laptop-1_result.png'
import pick from '../assets/icons/pick.png'
import solve from '../assets/icons/solve.png'
import share from '../assets/icons/share.png'

import Hero from '../components/hero'
import Footer from '../components/footer'
import Header from '../components/header'
import style from './home.module.sass'

function Home() {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <section className={`py-100 flex flex-column gap-50`}>
        <h2 className='h2'>How it works</h2>
        <div className={style.guide}>
          <div className={style.illustration}>
            <img
              src={illustration2}
              alt=''
              className={style.illustration_image}
            />
          </div>
          <div>
            <div>
              <img src='' alt='' />
            </div>
            <div className={style.steps}>
              <div className={style.step}>
                <div className={style.heading}>
                  <img src={pick} alt='' />
                  <h3>Pick a prompt</h3>
                </div>
                <div className={style.text}>
                  <p>
                    proompts has thousands of challenges available for
                    writers, graphic designers, illustrators,
                    animators, UI/UX designers, videographers and any
                    kind of digital creator. Browse and pick a prompt
                    that suits your skills to get started.
                  </p>
                </div>
              </div>

              <div className={style.step}>
                <div className={style.heading}>
                  <img src={solve} alt='' />
                  <h3>Solve It</h3>
                </div>
                <div className={style.text}>
                  <p>
                    Solve the prompt at your own pace using the tools
                    that you are most comfotable with. However, if the
                    prompt has conditions such as time limit or
                    specific tool to use then it is better to work
                    within the stated contraints to train yourself.
                  </p>
                </div>
              </div>

              <div className={style.step}>
                <div className={style.heading}>
                  <img src={share} alt='' />
                  <h3>Share with the community</h3>
                </div>
                <div className={style.text}>
                  <p>
                    Share your solution in the platform community to
                    get feedback. You can also take the time to review
                    others works and give them some feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
