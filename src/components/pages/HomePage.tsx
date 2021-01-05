import React, { FC } from 'react'

const HomePage: FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered is-size-1 mb-6">Home Page</h1>
        <h2>산기대 졸업 작품: Driving Mate</h2>
        <div>팀장(백엔드 & 임베디드): 김세환</div>
        <div>팀원(프론트엔드): 홍경원</div>
        <div>팀원(디자이너 & 마크업): 김하림</div>
        <div>팀원(디자이너 & 마크업): 이승은</div>
      </div>
    </section>
  )
}

export default HomePage;
