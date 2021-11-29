
import React, {useState} from 'react';
import {Button} from '../Button/styles';
import {ISpotify} from '../../services/spotify';
import {HeroContainer, HeroBg, VideoBg,
  HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowFoward
  , ArrowRight} from './styles';

const videoSrc = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/45bb965d-9175-461d-9163-bd28383e55bf/video.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211129T195854Z&X-Amz-Expires=86400&X-Amz-Signature=a8d1e6a3ddd7ded5adb646e4bd555d252eb68042fe6ca86dec2426f7c5986734&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22video.mp4%22&x-id=GetObject";
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
