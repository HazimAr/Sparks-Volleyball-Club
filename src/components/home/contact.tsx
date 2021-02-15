import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
const config = {
    KEY: 'user_K8yMoHdWyipPSteLQZyhY',
    SERVICE: 'service_kynwjfc',
    TEMPLATE: 'template_azeut2w',
}
init(config.KEY);
export default function Contact() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    // eslint-disable-next-line no-useless-escape
    const messageSent = () => { // notify user message was sent sucessfully
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        setPhone('')
        alert('Message Sent Sucessfully')
    }
    const inValid = () => { // notify user message is inValid
        alert('Please fill in all required fields')
    }

    const handleSubmit = function (e: any) {
        e.preventDefault();
        if (name !== '' && phone !== '' && email !== '' && subject !== '') {
            emailjs.send(config.SERVICE, config.TEMPLATE, {
                userEmail: email,
                userMessage: message,
                userName: name,
                userPhone: phone,
                userSubject: subject,
            });
            messageSent()
        } else {
            inValid()
        }
    }
    return (
        <div className='contact-outside-div' id='contact'>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <h2 className='section-title'>Have more questions?</h2>
                    <div className='contact-form-div'>
                        <input value={name} onChange={function (e) { setName(e.target.value) }} type='text' placeholder='Name *' className='contact-input' />
                        <input value={phone} onChange={function (e) { setPhone(e.target.value) }} type='text' placeholder='Phone *' className='contact-input' />
                    </div>
                    <div className='contact-form-div'>
                        <input value={email} onChange={function (e) { setEmail(e.target.value) }} type='text' placeholder='Email *' className='contact-input' />
                        <input value={subject} onChange={function (e) { setSubject(e.target.value) }} type='text' placeholder='Subject *' className='contact-input' />
                    </div>
                    <div className='contact-form-div'>
                        <textarea value={message} onChange={function (e) { setMessage(e.target.value) }} className='contact-input' placeholder='Message *' />
                    </div>
                    <input type='submit' id='button' className='intro-button' />
                </form>

        </div>
    )
}