import React, { FC, useState } from 'react'
import HeroSection from './components/HeroSection/HeroSection';
import InfoSection from './components/InfoSection/InfoSection';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar';

const HomePage: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
    </>
  )
}

export default HomePage;
