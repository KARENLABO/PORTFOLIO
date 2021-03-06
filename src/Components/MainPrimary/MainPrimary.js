import React from 'react';
import NavBar from '../NavBar/NavBar';
import TazaYellowimg from '../../img/TazaYellow.svg'
import CirculoGris from '../../img/CirculoGris.svg'
import './MainPrimary.css';




function MainPrimary() {
    return (
        <div className='principalHome'>

            <div className='navbarhome'>
                <NavBar />
            </div>

            <div className='ContainerMainPage'>

                <div className='Karen-Ramirez-txt'>
                    <h1> KAREN </h1>
                    <h1> RAMIREZ </h1>
                        <h3> Jr. Front End Developer </h3>
                </div>



                <div className='containerTazaAndElements'>
                    <div className='Taza-Yellow'>
                        <img alt='TazaYellow' className='Taza-Yellow-img' src={TazaYellowimg} />
                    </div>

            
                    
                    <div className='click-to-discover-txt'>
                        <p> Click to </p>
                        <p> Discover </p>
                    </div>
                </div>
    
            </div>



        </div>

    )
}

export default MainPrimary;