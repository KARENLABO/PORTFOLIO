import React from 'react';
import MovieChallenge from '../../../img/Movie challenge project.png'
import LunchTyme from '../../../img/Lunch Tyme.PNG'
import TaskManager from '../../../img/TASK MANAGER.PNG'
import DataLovers from '../../../img/Data lovers project.jpeg'
import LabNotes from '../../../img/LAB NOTES PROJECT.jpeg'
import '../Banner/Banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards'
import CardDeck from 'react-bootstrap/CardDeck'


const Projects = [
  {
    project: 'Lab Notes',
    imge: LabNotes,
    date: 'Laboratoria-2020-04',
    description: 'Taking good notes greatly facilitates study and decisively helps understanding. For this reason, we created Lab Notes, so that you can have secure notes that only you can access and that you dont miss any details of the things that interest you.',
    technologies: 'React, Firebase, Firebase Hosting, JavaScript, ReactStrap, Css',
    linkGitHub: 'https://github.com/KARENLABO/GDL004-lab-notes/tree/develop',
    linkDeploy: 'https://lab-notes-df536.firebaseapp.com',
  },
  {
    project: 'Data Lovers',
    imge: DataLovers,
    date: 'Laboratoria-2019-12',
    description: 'The wonderful world of Harry Potter is a gamification project thought and created to bring together the basics of the story to present to anyone who is completely unfamiliar with the subject and may have a general idea.',
    technologies: 'JavaScript, HTML, Css',
    linkGitHub: 'https://github.com/KARENLABO/GDL004-data-lovers',
    linkDeploy: 'https://lujanworld.github.io/GDL004-data-lovers',
  },
  {
    project: 'Movie Challenge',
    imge: MovieChallenge,
    date: 'Laboratoria -2020-05',
    description: 'Since DC comics exist, the question arises, which one is the best? Batman or Superman Our web application is aimed at DC fans who want to remember the best movies of each character, as well as search for movies in general.',
    technologies: 'React, Firebase, Firebase Hosting, JavaScript, Bootstrap, Css',
    linkGitHub: 'https://github.com/KARENLABO/GDL004-movie-challenge',
    linkDeploy: 'https://movie-challenge-9f174.web.app/',
  }
  ,
  {
    project: 'Task Manager ',
    imge: TaskManager,
    date: 'Technical Interview Jul-2020 ',
    description: 'Check All your task on tyme',
    technologies: 'React, Firebase Hosting, JavaScript, Bootstrap, Css, LocalStorage',
    linkGitHub: 'https://github.com/KARENLABO/BELIVEO-CHALLENGE',
    linkDeploy: 'https://beliveo-b20e2.web.app/',
  }
  ,
  {
    project: 'Lunch Tyme ',
    imge: LunchTyme,
    date: 'Tecnical Interview Jun-2020 ',
    description: 'An a web Page to found your favorite Restaurant ',
    technologies: 'React, Firebase Hosting, JavaScript,  Css, Google Maps',
    linkGitHub: 'https://github.com/KARENLABO/PIXANAPPS',
    linkDeploy: 'https://lunchtyme-944ae.web.app/',
  }

]


function ControlledCarousel() {
  return (
    <CardDeck className='ContainerCards'>
      <div className='card-columns'>
        {Projects.map(card => (
          <div className='divIndividualCard' key={card.project}>
            <Cards Project={card} />
          </div>
        ))}
      </div>

    </CardDeck>
  )
}

export default ControlledCarousel