import React from 'react';
import greenBranch from '../../img/RAMA VERDE2.png';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {

    return (
        <ul class="nav justify-content-center ">
            <li class="nav-item">
                <Link class="nav-link active" to='/overview'>
                    <h3 className='textNavPrincipal'>OVERVIEW</h3>
                    <img alt='greenBranch' className='greenBranch' src={greenBranch} />

                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link active" to='/resume'>
                    <h3 className='textNavPrincipal'>RESUME</h3>
                    <img alt='greenBranch' className='greenBranch' src={greenBranch} />


                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link active" to='/projects'>
                    <h3 className='textNavPrincipal'>PROJECTS</h3>
                    <img alt='greenBranch' className='greenBranch' src={greenBranch} />

                </Link>
            </li>

        </ul>
    );
}

export default NavBar;