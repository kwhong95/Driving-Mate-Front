
import React, { FC } from 'react'
import { Button, Button2 } from '../buttonElements';
import { animateScroll as scroll } from 'react-scroll';
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
  button2Label?: string;
}

const InfoSection: FC<InfoSectionProps> = ({ id, lightBg, lightText, darkText, imgStart, topLine, headline, description, buttonLabel, img, alt, primary, dark, dark2, button2Label }) => {

  const buttonhandler = () => {
    if(buttonLabel === "Start Now") {
      window.location.pathname = '/signup'
    } else {
      toggleHome();
    }
  }

  const toggleHome = () => {
    scroll.scrollToTop();
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
                    onClick={buttonhandler}
                    to="/"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >{buttonLabel}</Button>
                  {id === 'signup' ? null :
                  <Button2
                    style={{ marginLeft: '10px' }}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {button2Label}
                  </Button2>
                  }
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
