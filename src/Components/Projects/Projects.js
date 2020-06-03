import React from 'react';
import MiniNavBar from '../MiniNavBar/MiniNavBar';

// import Banner from './Banner/Banner'
import './Projects.css'


function Projects({ option }) {

    return (
        <div className='proyectsPage'>

            <MiniNavBar opt={option} />

        </div>
    );
}

export default Projects;