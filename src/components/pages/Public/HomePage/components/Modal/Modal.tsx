import React, { FC } from 'react'
import { Background, CloseModalButton, ModalContent, ModalImg, ModalWrapper } from './modalElements'

interface ModalProps {
  textInModal: any;
  showModal: boolean;
  setShowModal: any
}

const Modal: FC<ModalProps> = ({ showModal, setShowModal, textInModal }) => {
  return (
    <>
    {showModal ? 
      <Background>
        <ModalWrapper showModal={showModal}>
          <ModalImg alt="Input the Img" />
          <ModalContent>
            {textInModal}
          </ModalContent>
          <CloseModalButton 
            aria-label='Close modal'
            onClick={() => setShowModal((prev: boolean) => !prev)}
          />
        </ModalWrapper>
      </Background>    
    : null}
    </>
  )
}

export default Modal
