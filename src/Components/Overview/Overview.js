import React from 'react';
import MiniNavBar from '../MiniNavBar/MiniNavBar';
import Contact from '../Contact/Contact';
import OverviewPhoto from '../../img/overview photo.png'
import './Overview.css'



function Overview({ option }) {

    return (
        <div>
            <MiniNavBar opt={option} />
            <div className='containerOverview'>
                <div className='divProfilePhoto'>
                    <img className='profilePhoto' alt='profilePhoto' src={OverviewPhoto} />
                </div>

                <div className='textElevatorSpeach'>
                    <br></br>
                    <div>
                        <p className='helloelevator'>
                            Hello!
                        </p>
                        
                        My name is Ana Karen Ramirez Nuñez, I love to create functional and Beautiful websites. Developed by Figma, VS Code and coffee.
                        <br></br>
                       
                        <p className='aniqestionsText'>
                            Got any questions? Contact me at :
                         </p>
                        <br></br>
                        <br></br>
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
