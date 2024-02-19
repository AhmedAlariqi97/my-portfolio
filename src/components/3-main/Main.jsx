import './main.css'

const Main = () => {
  return (
    <main className='main flex'>
      <section className='left-section flex'>
        <button className='active'>all project</button>
        <button>Html & Css</button>
        <button>JavaScript</button>
        <button>React & Next</button>
        <button>Node & Express</button>
      </section>

      <section className='right-section flex'>
        {["aa", "bb", "cc", "1", "7"].map((item) => {
          return (
            <article key={item} className='card'>
              <img src='./ahmed-cir.png' alt='' width={277} />
              <div className='box' style={{width: "277px"}}>
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