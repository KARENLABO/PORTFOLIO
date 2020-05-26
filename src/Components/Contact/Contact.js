import React from 'react';
import './Contact.css';
import LinkedIn from '../../img/linkedin.svg';
import GitHub from '../../img/github.svg';
import Outlook from '../../img/outlook.svg';


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
                    <img src={Outlook} className="OutlookIcon" alt="OutlookLogo" />
                </div>
            </div>
        </div>
    )
}

export default Contact;