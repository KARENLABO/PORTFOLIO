import React from 'react';
import NavBar from '../NavBar/NavBar';
import './MainPrimary.css';
import LogoGrande from '../../img/LOGO GRANDE.png';



function MainPrimary() {
    return (
        <div className='principalHome'>

            <div className='bounce-in-top'>
                <img alt='ProfilePhoto' className='ProfilePhoto' src={LogoGrande} />
            </div>

            <div className='navbarhome'>
                <NavBar />
            </div>


        </div>

    )
}

export default MainPrimary;