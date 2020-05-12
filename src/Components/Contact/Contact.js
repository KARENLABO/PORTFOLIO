import React from 'react';
import './Contact.css';
import LinkedIn from '../../img/linkedin.svg';
import GitHub from '../../img/github.svg';
import Outlook from '../../img/outlook.svg';

function Contact() {
    return (
        <div className='generalContact'>
            <div className='c1'>
                <div className='LinkedInIcon'>
                    <img src={LinkedIn} className="linkedinIcon" alt="LinkedInLogo" />
                </div>
            </div>
            <div className='c2'>
                <div className='icon'>
                    <img src={GitHub} className="gitHubIcon" alt="GitHubLogo" />
                </div>
            </div>
            <div className='c3'>
                <div className='OutlookImg'>
                    <img src={Outlook} className="OutlookIcon" alt="OutlookLogo" />
                </div>
            </div>
        </div>
    )
}

export default Contact;