import React from 'react';
import {Button} from 'react-scroll';
import {Column2, ImgWrapper, Img,
  InfoContainer, InfoWrapper, InfoRow, Column1
  , TopLine, TextWrapper, Heading,
  Subtitle, BtnWrapper} from './styles';

const InfoSection: React.FC= () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine> </TopLine>
                <Heading> </Heading>
                <Subtitle> </Subtitle>
                <BtnWrapper>
                  <Button to='home'/>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
