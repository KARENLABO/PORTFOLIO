import React, { useState } from 'react';
import greenBranch from '../../img/RAMA VERDE2.png';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [option, setOption] = useState('Hola');
    console.log(option,setOption);
    return (
        <div className='navHomePage'>

            <div className='overviewNav' id='overviewNav'>
                <Link className='linkOptionsNav' to='/OverView'>
                    <p className='text' id='text'>Overview</p>
                    <img src={greenBranch} alt="green branch" className='greenBranch' />
                </Link>
            </div>


            <div className='resumeNav' id='resumeNav'>
                <Link className='linkOptionsNav' to='/Resume'>
                    <p className='text'  id='text'>Resume</p>
                    <img src={greenBranch} alt="green branch" class='greenBranch' />
                </Link>
            </div>

            <div className='projectsNav' id='projectsNav'>
                <Link className='linkOptionsNav' to='/Projects'>
                    <p className='text' id='text'>Projects </p>
                    <img src={greenBranch} alt="green branch" class='greenBranch' />
                </Link>
            </div>

        </div>
    );
}

export default NavBar;