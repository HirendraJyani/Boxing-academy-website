import React, {useEffect} from 'react'
import './Home.css'
import box1 from '../../assets/box1.jpg'
import logo from '../../assets/logo.png'
import AOS from 'aos';
import "aos/dist/aos.css";

const Home = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className="home">
            <nav data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="1000">
                    <img className="logo" src={logo} alt="logo"/>
                
                <h3 className="homeHeadNav">Habeeb Mustafa Boxing Academy</h3>
            </nav>

            <div className="homeSection">
                <div className="leftHomeSection">
                    <h1 className="homeHead1" 
                        data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="1500" >Sales Perfomence</h1>
                    <h1 className="homeHead2"
                        data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="1500">Every Day</h1>
                    <p className="homePara1"
                       data-aos="fade-up"
                       data-aos-easing="linear"
                       data-aos-duration="1500">Lorem Ipsum</p>
                </div>
                <div className="rightHomeSection"
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="1500">
                    <p className="homePara2">Lorem Ipsum</p>
                    <img className="homeImage" src={box1} alt="boxing"/>
                </div>
            </div>
        </div>
    )
}

export default Home
