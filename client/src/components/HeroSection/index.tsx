
import React, {useState} from 'react';
import {Button} from '../Button/styles';
import {ISpotify} from '../../services/spotify';
import {HeroContainer, HeroBg, VideoBg,
  HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowFoward
  , ArrowRight} from './styles';

const videoSrc = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f81a1834-3bca-43b5-bbdb-c15f7251fc86/video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211206T182906Z&X-Amz-Expires=86400&X-Amz-Signature=d097bdd4095d0eaac90d9918a3bdac36ef6539757da72e3dd787f169ee4fbbec&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22video.mp4%22&x-id=GetObject";
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
        <VideoBg autoPlay loop muted src={videoSrc} type='video/mp4'/>
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
