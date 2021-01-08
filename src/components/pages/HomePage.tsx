import React, { FC, Fragment } from 'react';
import  HomeVidio  from '../../asserts/HomeVidio.mp4';

interface HomePageProps {
  translate: (key: string) => string;
}


const HomePage: FC<HomePageProps> = ({ translate }) => {

  return (
  <Fragment>
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered is-size-1 mb-6">{translate('homepage')}</h1>
        <h2>산기대 졸업 작품: {translate('driving mate')}</h2>
        <div>팀장(백엔드 & 임베디드): 김세환</div>
        <div>팀원(프론트엔드): 홍경원</div>
        <div>팀원(디자이너 & 마크업): 김하림</div>
        <div>팀원(디자이너 & 마크업): 이승은</div>
        <video controls>
          <source src={HomeVidio} ></source>
        </video>
      </div>
    </section>
  </Fragment>
  )
}

export default HomePage;
