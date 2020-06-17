import React from 'react';
import MiniNavBar from '../MiniNavBar/MiniNavBar';
import MiniNavBar2 from '../MiniNavBar/MinibarwithBoostrap';
import Contact from '../Contact/Contact';
import OverviewPhoto from '../../img/overview photo.png'
import './Overview.css'



function Overview({ option }) {

    return (
        <div>
            <MiniNavBar2/>
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

                        My name is Ana Karen Ramirez Nuñez, I love to create functional and Beautiful websites. Developed by using  Figma, VS Code and coffee.
                        <br></br>

                        <div className='contactinfo'>
                        <br></br>
                            <h3 className='aniqestionsText'>
                                Got any questions? Contact me at : 
                               
                         
                             </h3>

                             <p>
                             (33 14 95 62 88)     or
                            </p>
                            <br></br>

                      

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
