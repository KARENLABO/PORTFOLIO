import React from 'react';
import MiniNavBar2 from '../MiniNavBar/MinibarwithBoostrap';
import Contact from '../Contact/Contact';
import OverviewPhoto from '../../img/overview photo.jpg'
import './Overview.css'



function Overview({ option }) {

    return (
        <div>
            <MiniNavBar2 />
            {/* <MiniNavBar opt={option} /> */}
            <div className='containerOverview'>
                <div className='divProfilePhoto'>
                    <img className='profilePhoto' alt='profilePhoto' src={OverviewPhoto} />
                </div>

                <div className='textElevatorSpeach'>
                    <br></br>
                    <div>
                        <p className='tracking-in-expand'>
                            Hello!
                        </p>
                        <p>
                            My name is Karen Ramirez, I am 26 years old and I am currently a front-end developer, but I also I have  a bachelor degree in Entrepreneurial development and innovation, and also have a technical degree in Human Resources administration.
                        </p>

                        <p>
                            8 months ago I decided to enter the world of programming and discovered that this is my passion, which is why I am looking for a job opportunity as a Jr. front-end developer.
                        </p>

                        <p>
                            I know there is still a long way to go, but it motivates me to continue to be a better version of myself every day.
                        </p>


                        <div className='contactinfo'>
                            <h3 className='aniqestionsText'>
                                Got any questions? Contact me at :
                            </h3>

                            <p>
                                (33 14 95 62 88)     or
                            </p>
                        </div>



                    </div>
                </div>
                <div className='contactmeSocialNetworks'>
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default Overview;
