import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import MovieChallenge from '../../../img/Movie challenge project.png'
import Cipher from '../../../img/chiper project.jpeg'
import DataLovers from '../../../img/Data lovers project.jpeg'
import LabNotes from '../../../img/LAB NOTES PROJECT.jpeg'
import '../Banner/Banner.css'  
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      <Carousel ClassName='CarouselBanner'activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >
          <img
            className="ImgBanner"
            src={LabNotes}
            alt="Third slide"
          />   
            <Carousel.Caption >
                <h1 className="BannerLetters">
                    Lab Notes
                </h1>
                <p className="BannerLettersP">The place to write your best ideas</p>
                            
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="ImgBanner"
            src= {Cipher}
            alt="First slide"
          />
            <Carousel.Caption >
                <h1 className="BannerLetters" >
                Chipher
                </h1>
                <p className="BannerLettersP">If you can think it you can make it</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="ImgBanner"
            src={DataLovers}
            alt="Second slide"
          />
            <Carousel.Caption >
                <h1 className="BannerLetters">
                Data Lovers
                </h1>
                <p className="BannerLettersP">Be Magic, write Magic</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="ImgBanner"
            src= {MovieChallenge}
            alt="First slide"
          />
            <Carousel.Caption >
                <h1 className="BannerLetters" >
                Movie Challenge
                </h1>
                <p className="BannerLettersP">If you can think it you can make it</p>
            </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    );
  }
  

  export default ControlledCarousel