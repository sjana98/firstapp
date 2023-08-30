import React from 'react';
import './Blog.css';
import BlogImage from '../../assets/blog/blog.jpg';

export default function Blog() {
  return (
    <>
      <section id="Blog">
        <div className="container">
          <div className="blog_wrapper">
            <div className="blog_col">
              <h3>WE HELP BUSINESSES LAUNCH, GROW AND SUCCEED</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore alias enim tempora iste iure. Qui nisi ipsa mollitia beatae ratione, in voluptatem enim, cumque nesciunt maiores consequuntur fugit, rem accusantium. Porro voluptates similique suscipit corrupti.</p>
              <div className="btn_wrapper">
                <a className="btn" href = "/">Get Started</a>
              </div>
            </div>
            <div className="blog_col">
              <div className="blog_image">
                <img src={BlogImage} alt="blog_img" />
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}
