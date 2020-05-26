import React from 'react';
import MiniNavBar from '../MiniNavBar/MiniNavBar';
import Contact from '../Contact/Contact';
import './Overview.css'



function Overview({ option }) {

    return (
        <div>
            <MiniNavBar opt={option} />
            <div className='containerOverview'>
                <div className='profilePhoto'>
                    <img alt='profilePhoto' src='https://github.com/KARENLABO/PORTFOLIO/blob/master/src/img/overview%20photo.png?raw=true' />
                </div>

                <div className='textElevatorSpeach'>
                    <p>
                        Hello!
                        <br></br>
                        <br></br>
                        My name is Ana Karen Ramirez Nuñez I love to create functional and Beautiful websites. Developed by Figma, VS Code and coffee.
                        <br></br>
                        <br></br>
                        I really love to bring ideas to life.
                        <br></br>
                        <br></br>

                        Got any questions? Contact me ;).
                        <br></br>
                        <br></br>
                    </p>

                    <Contact />
                </div>
                <div className='flowerRigth'>
                    <img alt='flowerRigth' src='https://github.com/KARENLABO/PORTFOLIO/blob/master/src/img/FLORES%20RIGTH.png?raw=true' />
                </div>
            </div>
        </div>
    );
}

export default Overview;
