import React, {useState, useEffect} from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

    // Scroll up icon
    const faArrowUpIcon = <FontAwesomeIcon icon={faArrowUp} />


    // State
    const [isVisible, setData] = useState(false);

    const scrollThumbPosition = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const arrowBtnShow = () => {
        const scrollTrackLength = 850;
        const winFeatures = document.body.scrollTop || document.documentElement.scrollTop;
        (winFeatures > scrollTrackLength ? setData(true) : setData(false));
    };

    useEffect(() => {
        window.addEventListener('scroll', arrowBtnShow);
    });


    return (
        <>
            <section className='container'>
                <footer className='footer'>
                    <p>© All Right Reserved 2023  &#160;|&#160;  Designed by <a href="http://https://www.linkedin.com/in/suman-jana-678334254/" target="blank">Suman Jana</a></p>
                </footer>
            </section>

            
            {/* Scroll to top */}
            {
                isVisible && (
                    <div className="scroll_top" onClick={scrollThumbPosition}>
                        {faArrowUpIcon}
                    </div>
                )
            }
        </>
    )
}
