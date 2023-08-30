import React from 'react'
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons'
import AboutPhoto from '../../assets/about/about_img.jpg'

export default function About() {

  const faBusinessTimeIcon = <FontAwesomeIcon icon={faBusinessTime} />
  const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
  const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
  const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
  const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
  const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

  return (
      <>
          <section id="About">
              <div className="container">
                  <div className="title_heading">
                      <h3>We Provides Shortage Remarkable Ideas!</h3>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eveniet provident aliquid aliquid aliquid!</p>
                  </div>
                  <div className="about_box_wrapper">
                      <div className="about_box">
                          <div className="about_icon">
                              {faBusinessTimeIcon}
                          </div>
                          <div className="about_content">
                              <h5>Development</h5>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, deleniti reprehenderit cum quisquam?</p>
                          </div>
                      </div>
                      <div className="about_box">
                          <div className="about_icon green_icon">
                              {faChartPieIcon}
                          </div>
                          <div className="about_content">
                              <h5>Integration</h5>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, deleniti reprehenderit cum quisquam?</p>
                          </div>
                      </div>
                      <div className="about_box">
                          <div className="about_icon blue_icon">
                              {faTruckFastIcon}
                          </div>
                          <div className="about_content">
                              <h5>Branding</h5>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, deleniti reprehenderit cum quisquam?</p>
                          </div>
                      </div>
                  </div>

                  <div className="about_box_details">
                      <div className="about_col">
                          <div className="about_image">
                              <img src= {AboutPhoto} alt="about" />
                          </div>
                          <div className="img_info_box">
                              <h6 className='img_info_title'>GET A PRICE QUOTE TODAY!</h6>
                              <p>Lorem ipsum dolor sit amet consectetur.<br/>Suscipit, vero voluptatem! Sequi.</p>
                              <a href="/">{faPhoneIcon} <span>1-234-567-8901</span> </a>
                          </div>
                      </div>
                      <div className="about_col more_space">
                          <h4>We have business skill that will increase your earning.</h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque est ratione illo officiis modi velit, facilis minus cupiditate? Facere, officia? Totam, illo culpa!</p>

                          <div className="grid_info">
                              <div className="icon">{faUserClockIcon}</div>
                              <div className="detail">
                                  <h4>Start your own business in minutes.</h4>
                                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, dolorem quo. Reprehenderit, magnam.</p>
                              </div>
                          </div>
                          <div className="grid_info">
                              <div className="icon green_icon">{faHouseLaptopIcon}</div>
                              <div className="detail">
                                  <h4>Open a business account online.</h4>
                                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, dolorem quo. Reprehenderit, magnam.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}
