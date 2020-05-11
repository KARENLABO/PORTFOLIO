import React from 'react';
import greenBranch from '../../img/RAMA VERDE2.png';
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <div id='overviewNav'>
                <p id='text'>Overview</p>
                <img src={greenBranch} alt = "green branch" class='greenBranch'/>
            </div>
            <div id='resumeNav'>
                <p id='text'>Resume</p>
                <img src={greenBranch} alt = "green branch" class='greenBranch'/>
            </div>
            <div id='projectsNav'>
                <p id='text'>Projects< /p>
                <img src={greenBranch} alt = "green branch" class='greenBranch'/>
            </div>
        </div>
    );
}

export default NavBar;