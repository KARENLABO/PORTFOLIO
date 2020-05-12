import React from 'react';
import NavBar from '../NavBar/NavBar';
import './MainPrimary.css';


function MainPrimary() {
    return (
        <div>
            <div className='principalHome'>
                <div className='flowersLeft'  >
                    <img className='principalHomeFlowersimg' alt='flowersLeft' src='https://github.com/KARENLABO/PORTFOLIO/blob/master/src/img/FLORES%20LEFT.png?raw=true' />
                </div>
                <div className='logoprincipalHome'>
                    <img alt='ProfilePhoto' className='ProfilePhoto' src='https://github.com/KARENLABO/PORTFOLIO/blob/master/src/img/LOGO%20GRANDE%20.png?raw=true' />
                </div>
                <div className='flowersRigth' >
                    <img className='principalHomeFlowersimg' alt='flowersRigth' src='https://github.com/KARENLABO/PORTFOLIO/blob/master/src/img/FLORES%20RIGTH.png?raw=true' />
                </div>

            </div>
            <NavBar/>
        </div>
    )
}

export default MainPrimary;