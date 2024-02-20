import { useState } from 'react'
import './main.css'

const Main = () => {

  const [currentActive, setcurrentActive] = useState('all')

  return (
    <main className='main flex'>
      <section className='left-section flex'>
        <button onClick={() => {
          setcurrentActive('all')
        }}
          className={currentActive === 'all' ? 'active' : null}>all project</button>

        <button onClick={() => {
          setcurrentActive('html')
        }}
          className={currentActive === 'html' ? 'active' : null}>Html & Css</button>

        <button onClick={() => {
          setcurrentActive('javascript')
        }}
          className={currentActive === 'javascript' ? 'active' : null}>JavaScript</button>

        <button onClick={() => {
          setcurrentActive('react')
        }}
          className={currentActive === 'react' ? 'active' : null}>React & Next</button>

        <button onClick={() => {
          setcurrentActive('node')
        }}
          className={currentActive === 'node' ? 'active' : null}>Node & Express</button>
      </section>

      <section className='right-section flex'>
        {["aa", "bb", "cc", "1", "7"].map((item) => {
          return (
            <article key={item} className='card'>
              <img src='./ahmed-cir.png' alt='' width={277} />
              <div className='box' style={{ width: "277px" }}>
                <h2 className='title'>landing page</h2>
                <p className='sub-title'> landing page landing pagd lakdjf landing page landing pagd lakdjf landing page landing pagd lakdjf</p>
                <div className='flex icons'>
                  <div className='flex links'>
                    <div className='icon-link'></div>
                    <div className='icon-github-square'></div>
                  </div>
                  <a href='' className='more flex'>more
                    <span className='icon-arrow-right'></span></a>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default Main