import React, { FC } from 'react'
import { Button } from '../buttonElements';
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './infoElements'

interface InfoSectionProps {
  lightBg: boolean;
  lightText: boolean;
  darkText: boolean;
  imgStart: boolean;
  topLine: string;
  headline: string;
  description: string;
  buttonLabel: string;
  img: any;
  alt: string;
  id: any;
  primary: any;
  dark: any;
  dark2?: any;
}

const InfoSection: FC<InfoSectionProps> = ({ id, lightBg, lightText, darkText, imgStart, topLine, headline, description, buttonLabel, img, alt, primary, dark, dark2 }) => {

  const signUpButtonhandler = () => {
    if(buttonLabel === "Start Now") {
      window.location.pathname = '/signup'
    }
  }

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button 
                    onClick={signUpButtonhandler}
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
