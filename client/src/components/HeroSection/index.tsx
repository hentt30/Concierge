
import React from 'react';
import Video from '../../assets/video.mp4';
import {HeroContainer, HeroBg, VideoBg,
  HeroContent, HeroH1, HeroP} from './styles';

const HeroSection: React.FC = () => {
  return (
    <HeroContainer >
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Get Out Of Your Comfort Zone</HeroH1>
        <HeroP>
        Create randomly generated spotify playlists from your favorite genre
        </HeroP>
      </HeroContent>

    </HeroContainer>
  );
};

export default HeroSection;
