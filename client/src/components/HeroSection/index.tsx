
import React, {useState} from 'react';
import Video from '../../assets/video.mp4';
import {Button} from '../Button/styles';
import {ISpotify} from '../../services/spotify';
import {HeroContainer, HeroBg, VideoBg,
  HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowFoward
  , ArrowRight} from './styles';

type HeroSectionProps ={
    spotifyApi: ISpotify;
}
const HeroSection: React.FC<HeroSectionProps> = ({spotifyApi}) => {
  const [hover, setHover] = useState(false);
  // console.log(loginUrl);

  const onHover = () =>{
    setHover(!hover);
  };

  return (
    <HeroContainer id={'home'} >
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Get Out Of Your Comfort Zone</HeroH1>
        <HeroP>
        Create randomly generated spotify playlists from your favorite genre
        </HeroP>
        <HeroBtnWrapper>
          <Button to="" onClick = {()=>{
            spotifyApi.login();
          }}
          target="_blank"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary='true'
          dark='true'
          >
                Get Started {hover ? <ArrowRight/>:<ArrowFoward/>}
          </Button>

        </HeroBtnWrapper>
      </HeroContent>

    </HeroContainer>
  );
};

export default HeroSection;
