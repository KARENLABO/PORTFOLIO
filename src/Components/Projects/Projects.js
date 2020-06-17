import React from 'react';
import MiniNavBar from '../MiniNavBar/MinibarwithBoostrap';
import Cards from './Banner/Cards'
import Banner from './Banner/Banner'
import './Projects.css'


function Projects({ option }) {

    return (
        <div className='proyectsPage'>

            <MiniNavBar opt={option} />
            <div className='cardsContainer'>
                <Banner />
            </div>

        </div>
    );
}

export default Projects;