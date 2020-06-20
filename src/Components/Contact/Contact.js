import React from 'react';
import './Contact.css';
import LinkedIn from '../../img/linkedin.png';
import GitHub from '../../img/github.png';
import Email from '../../img/email.png';


function Contact() {
    return (
        <div className='generalContact'>

            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/akarenramirez/' className='linkedindiv'>
                <div className='LinkedInIcon'>
                    <img src={LinkedIn} className="linkedinIcon" alt="LinkedInLogo" />
                </div>
            </a>

            <a target="_blank" rel="noopener noreferrer" href='https://github.com/KARENLABO' className='githubdiv'>
                <div className='icon'>
                    <img src={GitHub} className="gitHubIcon" alt="GitHubLogo" />
                </div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:karenRamirez9428@hotmail.com?Subject=Job%20Opportunity" className='emaildiv'>
                <div className='Outlookicon'>
                    <img src={Email} className="OutlookIcon" alt="OutlookLogo" />
                </div>
            </a>


        </div>
    )
}

export default Contact;