import './contact.css'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

  const [state, handleSubmit] = useForm("mgegkbrl");

  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }


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
          <form onSubmit={handleSubmit} className='form'>
           <div className='flex'>
            <label htmlFor='email'>Email Address:</label>
            <input required type='email' name='email' id='email' />

            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
           </div>

           <div className='flex' style={{marginTop: "24px"}}>
            <label htmlFor='message'>Your Message:</label>
            <textarea required name='message' id='message'></textarea>

            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
           </div>

            <button type='submit' className='submit' disabled={state.submitting}>
              { state.submitting ? "Submitting..." : "Submit" }
            </button>

            { state.succeeded && (
              <h3 className='message-success'>Your has been sent successfully</h3>
            )}
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