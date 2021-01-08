import React, { FC, Fragment } from 'react';
import  HomeVidio  from '../../asserts/HomeVidio.mp4';
import Link from '@material-ui/core/Link';

import './style/style.css';

interface HomePageProps {
  translate: (key: string) => string;
}


const HomePage: FC<HomePageProps> = ({ translate }) => {

  return (
  <Fragment>
    <section className="showcase">
      <header>
        <h2 className="logo">Logo</h2>
        <div className="toggle"></div>
      </header>
        <video muted loop autoPlay><source src={HomeVidio} ></source></video>
        <div className="overlay"></div>
        <div className="text">
          <h2>Driving Mate</h2>
          <h3>A Good Mate for a Driver</h3>
          <p>I'll show you all the information on the vehicle you're curious about.</p>
        </div>
        <ul className="social">
          <li><a href="#"><img alt="facebook" src="https://i.ibb.co/x7P24fL/facebook.png"/></a></li>
          <li><a href="#"><img alt="instagram" src="https://i.ibb.co/ySwtH4B/instagram.png" /></a></li>
        </ul>
    </section>

    <div className="menu">
      <ul>
        <li><Link>Sign In</Link></li>
        <li><Link>Sign Up</Link></li>
      </ul>
    </div>
  </Fragment>
  )
}

export default HomePage;
