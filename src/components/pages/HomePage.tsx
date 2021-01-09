import React, { FC, Fragment, useEffect } from 'react';
import  HomeVidio  from '../../asserts/HomeVidio.mp4';
 
import './style/style.css';

interface HomePageProps {
  translate: (key: string) => string;
}


const HomePage: FC<HomePageProps> = ({ translate }) => {

  useEffect(() => {
    const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');
  
    menuToggle?.addEventListener('click', () => {
      menuToggle?.classList.toggle('active');
      showcase?.classList.toggle('active');
    });
  })

  return (
    <Fragment>
    <section className="showcase">
      <header>
        <h2 className="logo">Logo</h2>
        <div className="toggle"></div>
      </header>
      <video src={HomeVidio} muted loop autoPlay></video>
      <div className="overlay"></div>
      <div className="text">
        <h2>Driving Mate</h2> 
        <h3>A Good Mate for a Driver</h3>
        <p>I'll show you all the information on the vehicle you're curious about</p>
      </div>
      <ul className="social">
        <li><a href="https://www.facebook.com/profile.php?id=100002481298079"><img alt="facebook" src="https://i.ibb.co/x7P24fL/facebook.png" /></a></li>
        <li><a href="https://www.instagram.com/k.w_hong_922/"><img alt="instagram" src="https://i.ibb.co/ySwtH4B/instagram.png" /></a></li>
      </ul>
    </section>
    <div className="menu">
      <ul>
        <li><a href="/signup">Sign Up</a></li>
        <li><a href="/signin">Sign In</a></li>
      </ul>
    </div>
  </Fragment>
  )
}


export default HomePage;
