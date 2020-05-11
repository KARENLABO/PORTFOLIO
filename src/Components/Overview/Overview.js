import React from 'react';
import MiniNavBar from '../MiniNavBar/MiniNavBar';
import './Overview.css'
import { Link } from 'react-router-dom';


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
                        Hello EveryBody, I'm Ana Karen Ramirez Nuñez Billingual Front End developer and entrepreneurial and innovation development engineer. <br></br>
                        <br></br>
                        I develop functional and Pretty web pages to make easier your work, with this useful pages your sales will be increase and your customers will be more satisfied.
                        <br></br>
                        <br></br>
                        If you are interested to know more about this.
                        <br></br>
                        <br></br>
                    </p>
                    <Link className='linkOptionsNav' to='/Contact'>
                        contact me...
                    </Link>


                </div>
                <div className='flowerRigth'>
                    <img alt='flowerRigth' src='https://github.com/KARENLABO/PORTFOLIO/blob/master/src/img/FLORES%20RIGTH.png?raw=true' />
                </div>
            </div>
        </div>
    );
}

export default Overview;
