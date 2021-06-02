import React, {useEffect} from 'react'
import box2 from '../../assets/box2.jpg'
import './Section1.css'
import AOS from 'aos';
import "aos/dist/aos.css";

const Section1 = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className="section1">
            <div className="container1" 
                 data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="1000">
                <h2 className="section1H2Head1">NOTRE</h2>
                <h1 className="section1H1Head1">ACCOMPAGNEMENT</h1>
                <p className="section1Para1">It is a long established fact that a reader will</p>
            </div>

            <div className="container2">
                <div className="leftSide" 
                     data-aos="fade-right"
                     data-aos-easing="linear"
                     data-aos-duration="1000">
                    <img className="section1Image" src={box2} alt="boxing" />
                </div>
                
                <div className="rightSide">
                    <div className="rightSideContainer">
                        <p className="section1Para2" 
                           data-aos="fade-left"
                           data-aos-easing="linear"
                           data-aos-duration="1000">Lorem Ipsum</p>
                        <h2 className="section1H2Head2" 
                            data-aos="fade-left"
                            data-aos-easing="linear"
                            data-aos-duration="1000">LOREM IPSUM</h2>
                        <h2 className="section1H2Head3" 
                            data-aos="fade-left"
                            data-aos-easing="linear"
                            data-aos-duration="1000">LOREM IPSUM</h2>
                        <p className="section1Para3" 
                           data-aos="fade-left"
                           data-aos-easing="linear"
                           data-aos-duration="1000">It is a long established fact that a reader will 
                            be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
