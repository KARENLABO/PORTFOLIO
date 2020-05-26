import React, { useState } from 'react';
import greenBranch from '../../img/RAMA VERDE2.png';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [option, setOption] = useState('Hola');
    console.log(option,setOption);
    return (
        <div className='navHomePage'>

            <div className='optionsNavbar' id='overviewNav'>
                <Link className='linkOptionsNav' to='/OverView'>
                    <p id='text'>Overview</p>
                    <img src={greenBranch} alt="green branch" class='greenBranch' />
                </Link>
            </div>


            <div className='optionsNavbar' id='resumeNav'>
                <Link className='linkOptionsNav' to='/Resume'>
                    <p id='text'>Resume</p>
                    <img src={greenBranch} alt="green branch" class='greenBranch' />
                </Link>
            </div>
            <div className='optionsNavbar' id='projectsNav'>
                <Link className='linkOptionsNav' to='/Projects'>
                    <p id='text'>Projects </p>
                    <img src={greenBranch} alt="green branch" class='greenBranch' />
                </Link>

            </div>
        </div>
    );
}

export default NavBar;