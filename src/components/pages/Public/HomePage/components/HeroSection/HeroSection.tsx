import React, { FC, useState } from 'react';
import HomeVidio from '../../../../../../asserts/HomeVidio.mp4';
import { Button } from '../buttonElement';
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './heroElements';

const HeroSection: FC = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={HomeVidio} typeof="video/mp4" />
      </HeroBg>   
      <HeroContent>
      <HeroH1>Driving Mate</HeroH1>
      <HeroP>
        Good friend of your car!
        I'll show you everything you're curious about.
      </HeroP>
      <HeroBtnWrapper>
        <Button 
          to='/signup' 
          onMouseEnter={onHover} 
          onMouseLeave={onHover}
          primary='true'
          dark='true'
        >
          Get started {hover ? <ArrowForward /> : <ArrowRight/> }
        </Button>
      </HeroBtnWrapper>
    </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
