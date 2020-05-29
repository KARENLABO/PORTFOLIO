import React from 'react';
import { Link } from 'react-router-dom';
import greenBranch from '../../img/RAMA VERDE2.png';
import './MiniNavBar.css';

function MiniNavBar({ opt }) {
    console.log(opt);

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
        <div className='optionMiniNavBar'>
            <div className='miniNavBarOpt' id='logo'>
                <Link className='linkOptionsNav' to='/'>
                    <img className='imglogominiNav' src='https://github.com/KARENLABO/PORTFOLIO/blob/master/src/img/LOGO%20GRANDE%20.png?raw=true' alt="green branch" />
                </Link>
            </div>

            <div className='miniNavBarOpt' id='overview'>
                <Link className='linkOptionsNav' to='/OverView'>
                    <p className={overviewOpt()} id='text'>Overview</p>
                    <img src={greenBranch} alt="green branch" className='greenBranch' />
                </Link>
            </div>

            <div className='miniNavBarOpt' id='Contact'>
                <Link className='linkOptionsNav' to='/Resume'>
                    <p className={resumeOpt()} id='text'>Resume</p>
                    <img src={greenBranch} alt="green branch" className='greenBranch' />
                </Link>
            </div>

            <div className='miniNavBarOpt' id='projects'>
                <Link className='linkOptionsNav' to='/Projects'>
                    <p className={projectsOpt()} id='text'>Projects </p>
                    <img src={greenBranch} alt="green branch" class='greenBranch' />
                </Link>
            </div>
        </div>
    );
}

export default MiniNavBar;