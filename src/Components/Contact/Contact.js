import React from 'react';
import './Contact.css';
import LinkedIn from '../../img/linkedin.png';
import GitHub from '../../img/github.png';
import Email from '../../img/email.png';
import Phone from '../../img/phone.png';


function Contact() {
    return (
        <div className='generalContact'>

            <a href='https://www.linkedin.com/in/akarenramirez/' className='c1'>
                <div className='LinkedInIcon'>
                    <img src={LinkedIn} className="linkedinIcon" alt="LinkedInLogo" />
                </div>
            </a>

            <a href='https://github.com/KARENLABO' className='c2'>
                <div className='icon'>
                    <img src={GitHub} className="gitHubIcon" alt="GitHubLogo" />
                </div>
            </a>
            <div className='c3'>
                <div className='OutlookImg'>
                    <img src={Email} className="OutlookIcon" alt="OutlookLogo" />
                </div>
            </div>
            <div className='c4'>
                <div className='phoneNumber'>
                    <img src={Phone} className="PhoneIcon" alt="PhoneLogo" />
                </div>
            </div>
        </div>
    )
}

export default Contact;