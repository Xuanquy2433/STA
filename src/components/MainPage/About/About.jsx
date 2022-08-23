import React from 'react'
import Slider from 'react-slick';

function About() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div id='about' style={{ width: '80%', margin: 'auto',height: '70vh' }}>
            <div className="s-heading">
                <h1>About us</h1>
            </div>
            <Slider {...settings}>
                <div>
                    <img src="https://mobirise.com/bootstrap-template/about-us-page-template/assets/images/ayo-ogunseinde-316141-3333x3333.jpg" alt="" />
                    <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <h5 >Name</h5>
                    <h3 >Developer</h3>
                </div>
                <div>
                    <img src="https://mobirise.com/bootstrap-template/about-us-page-template/assets/images/yoann-boyer-316485-1333x1333.jpg" alt="" />
                    <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <h5 >Name</h5>
                    <h3 >Developer</h3>
                </div>
                <div>
                    <img src="https://mobirise.com/bootstrap-template/about-us-page-template/assets/images/yoann-boyer-316485-1333x1333.jpg" alt="" />
                    <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <h5 >Name</h5>
                    <h3 >Developer</h3>
                </div>
                <div>
                    <img src="https://mobirise.com/bootstrap-template/about-us-page-template/assets/images/ayo-ogunseinde-316141-3333x3333.jpg" alt="" />
                    <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <h5 >Name</h5>
                    <h3 >Developer</h3>
                </div>

            </Slider></div>
    )
}

export default About