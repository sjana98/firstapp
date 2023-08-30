import React from 'react';
import './Contact.css';
import ContactImage from '../../assets/contact/contact.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    // Social icons
    const faEmailIcon = <FontAwesomeIcon icon={faEnvelope} />
    const faTwitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const faFacebookIcon = <FontAwesomeIcon icon={faFacebook} />
    const faLinkedinIcon = <FontAwesomeIcon icon={faLinkedin} />

    return (
        <>
            <section id='Contact'>
                <div className="container">
                    <div className="contact_wrapper">
                        <div className="contact_col">
                            <div className="contact_image">
                                <img src={ContactImage} alt="contact_img" />
                            </div>
                        </div>
                        <div className="contact_col">
                            <h2>contact Us</h2> 
                            <form>
                                <div className="input_wrapper">
                                    <input type="text" className='form-control' placeholder='Your Name...' autoComplete='off' />
                                </div>
                                <div className="input_wrapper">
                                    <input type="text" className='form-control' placeholder='Your Phone No...' autoComplete='off' />
                                </div>
                                <div className="input_wrapper">
                                    <input type="email" className='form-control' placeholder='Your Email Id...' autoComplete='off' />
                                </div>
                                <div className="input_wrapper">
                                    <textarea placeholder='Write a message...'></textarea>
                                </div>
                                <div className="btn_wrapper">
                                    <button type='submit' className='btn'>Submit</button>
                                </div>
                            </form>
                            <a href="https://sjana8901@gmail.com" className='social_icon' target='blank'>{faEmailIcon}</a>
                            <a href="https://www.linkedin.com/in/suman-jana-678334254/" className='social_icon' target='blank'>{faLinkedinIcon}</a>
                            <a href="https://github.com/sjana98" className='social_icon' target='blank'>{faTwitterIcon}</a>
                            <a href="https://github.com/sjana98" className='social_icon' target='blank'>{faFacebookIcon}</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
