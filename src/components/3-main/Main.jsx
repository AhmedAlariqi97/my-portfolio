import { useState } from 'react'
import './main.css'

const myProjects = [
  {title: "react project", category: "react", descreption: "akldjf akldjf akldjf alkjdf alkdjf akjdfk akldjf", imgPath: "./" },
  {title: "html & css project", category: "html", descreption: "akldjf akldjf akldjf alkjdf alkdjf akjdfk akldjf", imgPath: "./" },
  {title: "javascript project", category: "javascript", descreption: "akldjf akldjf akldjf alkjdf alkdjf akjdfk akldjf", imgPath: "./" },
  {title: "node project", category: "node", descreption: "akldjf akldjf akldjf alkjdf alkdjf akjdfk akldjf", imgPath: "./" }
]

const Main = () => {

  const [currentActive, setCurrentActive] = useState('all')
  const [arr, setArr] = useState(myProjects)

  return (
    <main className='main flex'>
      <section className='left-section flex'>
        <button onClick={() => {
          setCurrentActive('all')
        }}
          className={currentActive === 'all' ? 'active' : null}>all project</button>

        <button onClick={() => {
          setCurrentActive('html');
          setArr([
            {title: "html & css project", category: "html", descreption: "akldjf akldjf akldjf alkjdf alkdjf akjdfk akldjf", imgPath: "./" },
          ])
        }}
          className={currentActive === 'html' ? 'active' : null}>Html & Css</button>

        <button onClick={() => {
          setCurrentActive('javascript');
          setArr([
            {title: "javascript project", category: "javascript", descreption: "akldjf akldjf akldjf alkjdf alkdjf akjdfk akldjf", imgPath: "./" },
          ])
        }}
          className={currentActive === 'javascript' ? 'active' : null}>JavaScript</button>

        <button onClick={() => {
          setCurrentActive('react');
          setArr([
            {title: "react project", category: "react", descreption: "akldjf akldjf akldjf alkjdf alkdjf akjdfk akldjf", imgPath: "./" },
          ])
        }}
          className={currentActive === 'react' ? 'active' : null}>React & Next</button>

        <button onClick={() => {
          setCurrentActive('node');
          setArr([
            {title: "node project", category: "node", descreption: "akldjf akldjf akldjf alkjdf alkdjf akjdfk akldjf", imgPath: "./" }
          ])
        }}
          className={currentActive === 'node' ? 'active' : null}>Node & Express</button>
      </section>

      <section className='right-section flex'>
        {arr.map((item) => {
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