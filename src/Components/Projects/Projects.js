import React from 'react';
import MiniNavBar from '../MiniNavBar/MiniNavBar';
import GreenPoints from '../../img/puntos para projectos.png';
import Banner from './Banner/Banner'
import './Projects.css'


function Projects({ option }) {

    return (
        <div className='proyectsPage'>
            
            <MiniNavBar opt={option} />
            <Banner/>
        </div>
    );
}

export default Projects;