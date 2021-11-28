import React from 'react';
import {Button} from '../Button/styles';
import {Column2, ImgWrapper, Img,
  InfoContainer, InfoWrapper, InfoRow, Column1
  , TopLine, TextWrapper, Heading,
  Subtitle, BtnWrapper} from './styles';


interface InfoSectionProps {
    id: string;
    lightBg: boolean;
    lightText: boolean;
    topline: string;
    headline: string;
    description: string;
    buttonLabel:string;
    imgStart: boolean;
    img: string;
    alt: string;
    darkText: boolean;
}

const InfoSection: React.FC<InfoSectionProps>= (homeObjOne) => {
  const {id,
    lightBg,
    lightText,
    topline,
    headline,
    description,
    buttonLabel,
    imgStart,
    img,
    alt,
    darkText} = homeObjOne;
  console.log(id);
  return (
    <>
      <InfoContainer lightBg ={lightBg} id={id} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine> {topline} </TopLine>
                <Heading lightText={lightText}> {headline} </Heading>
                <Subtitle darkText={darkText}> {description} </Subtitle>
                <BtnWrapper>
                  <Button to='home'
                    smooth={'true'}
                    duration={500}
                    spy={'true'}
                    exact={'true'}
                    offset={-80}
                    primary={lightBg? 0:1}
                    dark={lightBg? 0:1}
                  >{buttonLabel} </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={img} alt ={alt} />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
