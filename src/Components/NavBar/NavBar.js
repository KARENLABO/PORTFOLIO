import React, {useState} from 'react';
import greenBranch from '../../img/RAMA VERDE2.png';
import './NavBar.css';

function NavBar() {
    const [option, setOption] = useState('Hola');
    console.log(option);
    return (
        <div>
            <div id='overviewNav' onClick={() => setOption('overview')}>
                <p id='text'>Overview</p>
                <img src={greenBranch} alt = "green branch" class='greenBranch'/>
            </div>
            <div id='resumeNav' onClick={() => setOption('resume')}>
                <p id='text'>Resume</p>
                <img src={greenBranch} alt = "green branch" class='greenBranch'/>
            </div>
            <div id='projectsNav' onClick={() => setOption('projects')}>
                <p id='text'>Projects< /p>
                <img src={greenBranch} alt = "green branch" class='greenBranch'/>
            </div>
        </div>
    );
}

export default NavBar;