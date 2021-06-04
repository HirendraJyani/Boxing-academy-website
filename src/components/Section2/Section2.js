import React, {useEffect} from 'react'
import box4 from '../../assets/box4.jpg'
import './Section2.css'
import AOS from 'aos';
import "aos/dist/aos.css";

function Section2() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className="section2">
            <div className="section2Left">
                <div className="section2LeftText">
                    <h1 className="text1"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000">PERSONAL</h1>
                    <h1 className="text2"
                   data-aos="fade-right"
                   data-aos-easing="linear"
                   data-aos-duration="1000">TRAINING</h1>
                    <h1 className="text3"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000">DONE BY</h1>
                    <h1 className="text4"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000">EXPERTS</h1>
                </div>
            </div>
            <div className="section2Right">
                <img className="section2Image" src={box4} alt="boxing"/>
            </div>
        </div>
    )
}

export default Section2
