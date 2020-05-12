import React from 'react';
import MiniNavBar from '../MiniNavBar/MiniNavBar';
import GreenPoints from '../../img/puntos para projectos.png';
import './Projects.css'


function Projects({ option }) {

    return (
        <div >
            <MiniNavBar opt={option} />
            <div className='containerProjects'>
                <div>
                    <img className='project4' alt='project' src='https://raw.githubusercontent.com/KARENLABO/GDL004-cipher/master/src/styles/PROTOTIPO%20FINAL.jpeg' />
                </div>
            </div>
            <div>
                <img className='project1' alt='project' src='https://github.com/KARENLABO/GDL004-lab-notes/blob/develop/lab-notes/src/Images/Data%20lovers.JPG?raw=true' />

            </div>
            <div>
                <img className='project2' alt='project' src='https://github.com/KARENLABO/GDL004-lab-notes/blob/develop/lab-notes/src/Images/LAB%20NOTES%20SIGN%20IN.JPG?raw=true' />
            </div>
            <div>
                <img className='project3' alt='project' src='https://github.com/KARENLABO/GDL004-movie-challenge/blob/master/page-movies/src/Components-CSS/img/homefinal.png?raw=true' />
            </div>

        </div>
    );
}

export default Projects;