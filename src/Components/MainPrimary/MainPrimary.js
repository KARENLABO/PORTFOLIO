import React from 'react';
import NavBar from '../NavBar/NavBar';
import './MainPrimary.css';
import LogoGrande from '../../img/LOGO GRANDE .png';
import flowersLeft from '../../img/FLORES LEFT.png';
import flowersRigth from '../../img/FLORES RIGTH.png';


function MainPrimary() {
    return (
        <div className='principalHome'>

            <div className='logoprincipalHome'>
                <img alt='ProfilePhoto' className='ProfilePhoto' src={LogoGrande} />
            </div>

            <div className='navbarhome'>
                <NavBar />
            </div>

            <div className='flowersLeft'  >
                <img className='principalHomeFlowersimg' alt='flowersLeft' src={flowersLeft} />
            </div>

            <div className='flowersRigth' >
                <img className='principalHomeFlowersimg' alt='flowersRigth' src={flowersRigth} />
            </div>
        </div>

    )
}

export default MainPrimary;