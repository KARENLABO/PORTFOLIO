import React from 'react';
import { Link } from 'react-router-dom';
import greenBranch from '../../img/RAMA VERDE2.png';
import ImgLogoMinibar from '../../img/LOGO KAREN PEQUENO.png';
import './MiniNavBar.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function MiniNavBar({ opt }) {
    const overviewOpt = () => {
        return (opt === 'overview') ? 'miniNavBarOptOverview' : 'miniNavBarOpt';
    }

    const resumeOpt = () => {
        return (opt === 'resume') ? 'miniNavBarOptResume' : 'miniNavBarOpt';
    }

    const projectsOpt = () => {
        return (opt === 'projects') ? 'miniNavBarOptProjects' : 'miniNavBarOpt';
    }
    return (

        <Navbar expand="lg" variant="light" >

            <Nav.Item className='optNav'>
                <Nav.Link href="/">
                    <img className='imglogominiNav' src={ImgLogoMinibar} alt="logoKaren" />
                </Nav.Link>
            </Nav.Item>

            <Nav.Item className='optNav'>
                <Nav.Link href="/OverView">
                    <p className={overviewOpt()} id='text'>Overview</p>
                    <img src={greenBranch} alt="green branch" className='branchLine' />
                </Nav.Link>
            </Nav.Item>


            <Nav.Item className='optNav'>
                <Nav.Link href="/Resume">
                    <p className={resumeOpt()} id='text'>Resume</p>
                    <img src={greenBranch} alt="green branch" className='branchLine' />
                </Nav.Link>
            </Nav.Item>

            <Nav.Item className='optNav' >
                <Nav.Link href="/Projects">
                    <p className={projectsOpt()} id='text'>Projects </p>
                    <img src={greenBranch} alt="green branch" className='branchLine' />
                </Nav.Link>
            </Nav.Item>

        </Navbar>
    );
}

export default MiniNavBar;