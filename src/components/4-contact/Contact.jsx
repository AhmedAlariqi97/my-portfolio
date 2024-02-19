import './contact.css'

const Contact = () => {
  return (
    <section className='contact-us'>
      <div className='head'>
        <h2 className='title'>
          <span className='icon-envelope'></span>
          Contact Us
        </h2>
        <p className='sub-title'>
          Contact us for more information and get notified
        </p>
      </div>
      <div className='body flex'>
        <div className='left-section'>
          <form className='form'>
           <div className='flex'>
            <label htmlFor='email'>Email Address:</label>
            <input required type='email' name='' id='email' />
           </div>

           <div className='flex' style={{marginTop: "24px"}}>
            <label htmlFor='message'>Your Message:</label>
            <textarea required name='' id='message'></textarea>
           </div>

            <button type='submit' className='submit'>Submit</button>
          </form>
        </div>
        <div className='right-section animation'>
            animate
        </div>
      </div>
    </section>
  )
}

export default Contact