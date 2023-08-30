import React from 'react';
import './Home.css'
import BannerImage from '../../assets/banner/banner-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartLine, faShieldHalved, faChartArea} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  // Icons
  const faChartIcon = <FontAwesomeIcon icon={faChartLine} />
  const faShildIcon = <FontAwesomeIcon icon={faShieldHalved} />
  const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />

  return (
    <>
      <section id="Home">
        <div className="banner_image"></div>
        <div className="container">
          <div className="banner_outer">
            <div className="col">
              <h3 className="title">WE PROMOTE YOUR <span>BUSINESS</span></h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis repellendus incidunt aut doloribus corrupti debitis repellat. Veniam!</p>
              <div className="btn_wrapper">
                <a href="/" className="btn">Get Started</a>
              </div>
            </div>
            <div className="col">
              <div className="sub_banner_image">
                <img src={BannerImage} alt="Banner_Image" />
              </div>
              <div className="banner_style_1">
                {faChartIcon}
                <h4>Business Analysis</h4>
              </div>
              <div className="banner_style_1 banner_style_2">
                {faShildIcon}
                <h4>99.9% Success</h4>
              </div>
              <div className="banner_style_1 banner_style_3">
                {faChartAreaIcon}
                <h4>Strategy</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
