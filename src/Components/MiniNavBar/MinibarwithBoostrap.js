import React from 'react';
import { Link } from 'react-router-dom';
import ImgLogoMinibar from '../../img/LOGO KAREN PEQUENO.png';
import greenBranch from '../../img/RAMA VERDE2.png';
import './MinibarBoostrap.css';

// className="navbar navbar-expand-lg navbar-dark bg-dark ">

const Header = () => {

    return (
        <nav id='navbar' className='navbar navbar-light  navbar-expand-lg  fixed-top bgcolor' >




            <Link to="/" className="navbar-brand"  >

                <img
                    alt="Logokaren"
                    src={ImgLogoMinibar}
                    className='logoNavbar'
                />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span id='togglerNavbar' className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  " id="navbarText">
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <Link to="/overview" className="nav-link text-white">
                            <h3 className='txtNavbar'>OVERVIEW</h3>
                            <img
                                alt="ShoppingIcon"
                                id="shopping-icon"
                                src={greenBranch}
                                className='grnBranchminiNav'
                            />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" className="nav-link text-white">
                            <h3 className='txtNavbar' >RESUME</h3>
                            <img
                                alt="ShoppingIcon"
                                id="shopping-icon"
                                src={greenBranch}
                                className='grnBranchminiNav'


                            />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-link text-white">
                            <span className="sr-only">(current)</span>
                            <h3 className='txtNavbar' >PROJECTS</h3>
                            <img
                                alt="ShoppingIcon"
                                id="shopping-icon"
                                src={greenBranch}
                                className='grnBranchminiNav'

                            />

                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
