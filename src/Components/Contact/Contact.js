import React from 'react';
import './Contact.css';
import LinkedIn from '../../img/linkedin.png';
import GitHub from '../../img/github.png';
import Email from '../../img/email.png';
import Phone from '../../img/phone.png';


function Contact() {
    return (
        <div className='generalContact'>

            <a href='https://www.linkedin.com/in/akarenramirez/' className='linkedindiv'>
                <div className='LinkedInIcon'>
                    <img src={LinkedIn} className="linkedinIcon" alt="LinkedInLogo" />
                </div>
            </a>

            <a href='https://github.com/KARENLABO' className='githubdiv'>
                <div className='icon'>
                    <img src={GitHub} className="gitHubIcon" alt="GitHubLogo" />
                </div>
            </a>
            <div className='emaildiv'>
                <div className='Outlookicon'>
                    <img src={Email} className="OutlookIcon" alt="OutlookLogo" />
                </div>
            </div>
            <div className='phonediv'>
                <div className='phoneNumbericon'>
                    <img src={Phone} className="PhoneIcon" alt="PhoneLogo" />
                </div>
            </div>
        </div>
    )
}

export default Contact;