import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_button from "../../assets/play_icon.png"
import info_button from "../../assets/info_icon.png"
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} className="hero-banner" />
        <div className="hero-caption">
          <img src={hero_title} className="hero-title" />
          <p>
            Discover his ties to a secret ancient order, a young man living in
            modern istanbul embarks on a guest to save the city from an immortal
            enemy
          </p>
          <div className="hero_btns">
            <button className="btn">
              <img src={play_button} alt="" className="play-btn" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_button} alt="" className="info-btn" />
              More info
            </button>
          </div>
          <div className="title-card">
            <TitleCards />
          </div>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Only on Netflix" category="top_rated" />
        <TitleCards title="Upcoming" category="upcoming" />
        <TitleCards title="Top Picks for You" />
      </div>
      <Footer />
    </div>
  );
}

export default Home