import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import 'bootstrap/dist/css/bootstrap.min.css';
import GitHub from '../../../img/githubprojects.png'
import Web from '../../../img/web.png'
import './Cards.css'


function Cards({ Project }) {


    return (
        <div className='tilt-in-top-1'>
            <Card className='containerCards'>
                {/* IMAGEN DEL PROYECTO PRESENTADO */}
                <Card.Img variant="top" src={Project.imge} />

                {/* LINKS DEL PROYECTO */}
                <Card.Footer className='containerlinks'>
                    <Card.Link target="_blank" href={Project.linkGitHub}>
                        <img alt='github' className='iconsLinks' src={GitHub}></img>
                    </Card.Link>
                    <Card.Link target="_blank" href={Project.linkDeploy}>
                        <img className='iconsLinks' alt='Web' src={Web}></img>
                    </Card.Link>
                </Card.Footer>

                <Card.Body>
                    <Card.Title className='titleProject'>{Project.project}</Card.Title>
                    <Card.Text className='projectDate'>{Project.date}</Card.Text>
                    <Card.Text className='projectDescription'>{Project.technologies}</Card.Text>
                </Card.Body>
            </Card>

        </div>
    )

}

export default Cards