import React, { FC, Fragment } from 'react';
import  HomeVidio  from '../../asserts/HomeVidio.mp4';
import { Link, Typography } from '@material-ui/core';
import { Facebook, Instagram } from '@material-ui/icons';

interface HomePageProps {
  translate: (key: string) => string;
}


const HomePage: FC<HomePageProps> = ({ translate }) => {

  return (
  <Fragment>
    <section className="section">
        <video muted loop autoPlay><source src={HomeVidio} ></source></video>

        <div className="overlay"></div>

        <div className="text">
          <Typography variant="h2">Driving Mate</Typography>
          <Typography variant="h3">A Good Mate for a Driver</Typography>
          <Typography variant="body1">I'll show you all the information on the vehicle you're curious about.</Typography>
        </div>

        <ul className="social">
          <a href="#"><Facebook /></a>
          <a href="#"><Instagram /></a>
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
