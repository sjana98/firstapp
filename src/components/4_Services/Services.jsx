import React from 'react'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faChartBar, faMarker, faUserGear, faLaptopCode, faCoins} from '@fortawesome/free-solid-svg-icons'

export default function Services() {
    
    // icons
    const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />
    const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />
    const faCopyIcon = <FontAwesomeIcon icon={faCopy} />
    const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />
    const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />
    const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />
    
  return (
      <>
          <div id="Services">
              <div className="container">
                  <div className="title_heading">
                      <h3>What's Services We Are Offering to Our Customers</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error aliquam expedita!</p>
                  </div>
                  <div className="service_wrapper">
                      <div className= "service_box">
                          <div className="service_icon blue_icon">{faLaptopCodeIcon}</div> 
                          <h4 className='number'>1</h4>
                          <div className= 'service_content'>
                              <h5>Cloud Computing</h5>
                              <p>Sample content, text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias harum fugiat, sample text.</p> 
                              <div className='read'>Read more </div> <div className='dots'>...</div>
                          </div>
                          <div className="decor"></div>
                          <div className= "service_All_content">
                              <h4 className='number inner_number'>1</h4>
                              <p><span className='read_des'>Description -</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quibusdam aliquam mollitia at sed ut odit quia consequatur minima. Nostrum deserunt inventore fuga temporibus consequatur. Assumenda ducimus sit voluptatum, temporibus itaque quisquam quas nisi est esse, rerum repellendus commodi eos molestiae, molestias unde! Quo explicabo aliquam fugit? Optio sequi aut atque accusamus, ullam eaque.</p>
                          </div>
                      </div>
                      <div className="service_box">
                          <div className="service_icon">{faChartBarIcon}</div> 
                          <h4 className='number'>2</h4>
                          <div className="service_content">
                              <h5>Business Strategy</h5>
                              <p>Sample content, text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias harum fugiat, sample text.</p> 
                              <div className='read'>Read more </div> <div className='dots'>...</div>
                          </div>
                          <div className="decor decor_2"></div>
                          <div className="service_All_content">
                              <h4 className='number inner_number'>2</h4>
                              <p><span className='read_des'>Description -</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quibusdam aliquam mollitia at sed ut odit quia consequatur minima. Nostrum deserunt inventore fuga temporibus consequatur. Assumenda ducimus sit voluptatum, temporibus itaque quisquam quas nisi est esse, rerum repellendus commodi eos molestiae, molestias unde! Quo explicabo aliquam fugit? Optio sequi aut atque accusamus, ullam eaque.</p>
                          </div>
                      </div>
                      <div className="service_box">
                          <div className="service_icon green_icon">{faCopyIcon}</div> 
                          <h4 className='number'>3</h4>
                          <div className="service_content">
                              <h5>Report Analysis</h5>
                              <p>Sample content, text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias harum fugiat, sample text.</p> 
                              <div className='read'>Read more </div> <div className='dots'>...</div>
                          </div>
                          <div className="decor decor_3"></div>
                          <div className= "service_All_content">
                              <h4 className='number inner_number'>3</h4>
                              <p><span className='read_des'>Description -</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quibusdam aliquam mollitia at sed ut odit quia consequatur minima. Nostrum deserunt inventore fuga temporibus consequatur. Assumenda ducimus sit voluptatum, temporibus itaque quisquam quas nisi est esse, rerum repellendus commodi eos molestiae, molestias unde! Quo explicabo aliquam fugit? Optio sequi aut atque accusamus, ullam eaque.</p>
                          </div>
                      </div>
                      <div className="service_box">
                          <div className="service_icon green_icon">{faMarkerIcon}</div> 
                          <h4 className='number'>4</h4>
                          <div className="service_content">
                              <h5>Decision Maker</h5>
                              <p>Sample content, text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias harum fugiat, sample text.</p> 
                              <div className='read'>Read more </div> <div className='dots'>...</div>
                          </div>
                          <div className="decor decor_4"></div>
                          <div className= "service_All_content">
                              <h4 className='number inner_number'>4</h4>
                              <p><span className='read_des'>Description -</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quibusdam aliquam mollitia at sed ut odit quia consequatur minima. Nostrum deserunt inventore fuga temporibus consequatur. Assumenda ducimus sit voluptatum, temporibus itaque quisquam quas nisi est esse, rerum repellendus commodi eos molestiae, molestias unde! Quo explicabo aliquam fugit? Optio sequi aut atque accusamus, ullam eaque.</p>
                          </div>
                      </div>
                      <div className="service_box">
                          <div className="service_icon blue_icon">{faUserGearIcon}</div> 
                          <h4 className='number'>5</h4>
                          <div className="service_content">
                              <h5>Customer Oriented</h5>
                              <p>Sample content, text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias harum fugiat, sample text.</p> 
                              <div className='read'>Read more </div> <div className='dots'>...</div>
                          </div>
                          <div className="decor decor_5"></div>
                          <div className= "service_All_content">
                              <h4 className='number inner_number'>5</h4>
                              <p><span className='read_des'>Description -</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quibusdam aliquam mollitia at sed ut odit quia consequatur minima. Nostrum deserunt inventore fuga temporibus consequatur. Assumenda ducimus sit voluptatum, temporibus itaque quisquam quas nisi est esse, rerum repellendus commodi eos molestiae, molestias unde! Quo explicabo aliquam fugit? Optio sequi aut atque accusamus, ullam eaque.</p>
                          </div>
                      </div>
                      <div className="service_box">
                          <div className="service_icon">{faCoinsIcon}</div> 
                          <h4 className='number'>6</h4>
                          <div className="service_content">
                              <h5>Solution Focused</h5>
                              <p>Sample content, text Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias harum fugiat, sample text.</p> 
                              <div className='read'>Read more </div> <div className='dots'>...</div>
                          </div>
                          <div className="decor decor_6"></div>
                          <div className= "service_All_content">
                              <h4 className='number inner_number'>6</h4>
                              <p><span className='read_des'>Description -</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat quibusdam aliquam mollitia at sed ut odit quia consequatur minima. Nostrum deserunt inventore fuga temporibus consequatur. Assumenda ducimus sit voluptatum, temporibus itaque quisquam quas nisi est esse, rerum repellendus commodi eos molestiae, molestias unde! Quo explicabo aliquam fugit? Optio sequi aut atque accusamus, ullam eaque.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
