
import './hero.css'

const Hero = () => {
  return (
    <section className='hero flex'>
      <div className='left-section'>
        <div className='parent-avatar'>
          <img src='./ahmed-cir.png' className='avatar' alt='' />
          <span className='icon-verified_user'></span>
        </div>

        <h1 className='title'>
          Software Developer, Graghic Designer
        </h1>
        <p className='sub-title'>
          l'm Ahmed Alariqi, software developer and graphic designer, software developer and graphic designer, software developer and graphic designer, software developer and graphic designer.
        </p>

        <div className='social-media flex'>
          
          <div className='icon icon-x'></div>
          <div className='icon icon-instagram'></div>
          <div className='icon icon-github-square'></div>
          <div className='icon icon-linkedin-square'></div>
        </div>

      </div>

      <div className='right-section animation'>
        Animatiion images
      </div>
    </section>
  )
}

export default Hero