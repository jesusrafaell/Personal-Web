import React, {useState} from 'react'
import Layout from '../components/layout/layout'
import { navigate } from 'gatsby'
import '../styles/contact.css'

const Contact = () => {

  const [mail, saveMail] = useState({
    name: '',
    email: '',
    subject: '',
    reason: 'hi',
    message: '',
  })

  const [send, saveSend] = useState(false)

  const {name, email, subject, reason, message } = mail

  const handleOnChange = e => {
    saveMail({
      ...mail,
      [e.target.name] : e.target.value
    })
  }

  const sendEmail = e =>{
    e.preventDefault()
    if(name === '' || email === '' || subject === ''){
      console.log('error requierd camp')
      return;
    }
    //emailjs.send('service_oilontb', 'template_md4gggv', mail,'user_YkU3vyn47n6EO3BWdkRIx')
    saveSend(true)
    setTimeout(() => {
      console.log('hola')
      saveSend(false)
      navigate('/')
    }, 3000) 
  }

  return (
    <Layout location='contact'>
      <div className="contact-bg"> 
        <div className="form">
          {send ? (
            <>
              <div className="title">
                <h1 id="title">Sending...</h1>
              </div>
              <div id="survery-form" className="spinner2">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
              </div>
            </>
          ):(
            <>
              <div className="title">
                <h1 id="title">Send me an email</h1>
              </div>
              <form id="survey-form" onSubmit={sendEmail}>
                <label htmlFor="name" id="name-label" className="uno">Name</label>
                <input name="name" type="text" id="name" placeholder="Enter your name" value={name} onChange={handleOnChange} required/>
                <label htmlFor="email" id="email-label" className="uno">Email</label>
                <input name="email" type="email" id="email" placeholder="Enter your email"  value={email} onChange={handleOnChange} required/>
                <label htmlFor="subject" id="text" className="uno">Subject</label>
                <input 
                  name="subject" type="text" id="subject" placeholder="Enter your Subject" value={subject} onChange={handleOnChange} required/>
                <label htmlFor="dropdown" id="dropdown-label" className="uno">Reason</label>
                  <select name="reason" value={reason} onBlur={handleOnChange} onChange={handleOnChange} id="dropdown"> 
                      <option value="hello">Just, Hi</option>
                      <option value="social">Social Media</option>
                      <option value="web">Web Development</option>
                      <option value="software">Software</option>
                      <option value="other">Other</option>
                 </select>
                  <p className="uno">Message</p>
                  <textarea 
                    value={message} 
                    onChange={handleOnChange} 
                    id="message" 
                    className="textarea uno" 
                    name="message" 
                    placeholder="Enter your message here...">
                  </textarea>
                  <button type="submit" id="submit" className="submit uno">Submit</button>
              </form>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Contact
