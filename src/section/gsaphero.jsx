import React, { useEffect } from 'react';
import img1 from "../assets/vannes4.jpg";
import img2 from "../assets/vannes3.jpg";
import img3 from "../assets/vannes2.jpg";
import img4 from "../assets/vannes.jpg";
import img5 from "../assets/vannes6.jpg";
import img6 from "../assets/vannes5.jpg";
import img7 from "../assets/vannes4.jpg";
import img8 from "../assets/vannes3.jpg";
import img9 from "../assets/vannes2.jpg";
import img10 from "../assets/vannes.jpg";
import "../section/gsap.css";
import { initGsapAnimations } from './script.jsx'; 

function GsapHero() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    useEffect(() => {
        initGsapAnimations();
    }, []);

    return (
        <div className="container">
            <div className="active-slide">
                {images.map((image, index) => (
                    <img src={image} alt={`slide ${index + 1}`} key={index} />
                    
                ))}
            </div>

            <div className="slider">
                {images.map((image, index) => (
                    <div className="slide" id={`slide-${index + 1}`} key={index}>
                        <div className="slide-copy">
                            <p>nyobain gsap</p>
                            <p id="index">(detailnya)</p>
                        </div>
                        <div className="slide-img">
                            <img src={image} alt={`slide ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GsapHero;


