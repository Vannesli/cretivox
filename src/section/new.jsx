import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vannes from "../assets/vannes2.jpg";
import Newspaper from "../assets/space2.jpeg";
import vids from "../assets/sword.mp4";
import Hiring from "../component/hiring.jsx"
import Kindly from "../component/kindly.jsx"
import Check from "../component/Check.jsx"
import Portofolio from "../component/porto.jsx"
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../section/new.css";
import Hero from "./hero.jsx";


gsap.registerPlugin(ScrollTrigger);
function New() {
    const heroRef = useRef(null);
    const textOverlayRef = useRef(null);
    const buttonRef = useRef(null);
    const navigate = useNavigate();
    const movingTextRef = useRef(null);
    const [scrollDirection, setScrollDirection] = useState("down");

    useEffect(() => {

        const movingTextAnimation = gsap.fromTo(
            movingTextRef.current,
            { xPercent: -100 }, 
            { xPercent: -380, 
              ease: "none",
              duration: 100,
              repeat: -1, 
              repeatDelay: 2, 
              onComplete: () => {
                
              }
            },
        );

        const scrollHandler = () => {
            const newScrollDirection = window.scrollY > 0 ? "down" : "up";
            if (newScrollDirection !== scrollDirection) {
                setScrollDirection(newScrollDirection);
            }
        };

        window.addEventListener("scroll", scrollHandler);

        ScrollTrigger.create({
            trigger: movingTextRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
                movingTextAnimation.timeScale(self.progress * 5 + 1);
                movingTextAnimation.seek(self.progress * movingTextAnimation.duration()); // Set the animation position based on scroll progress
                if (self.direction === 1) {
                    
                    movingTextAnimation.play();
                } else if (self.direction === -1 && scrollDirection === "down") {
                    
                    movingTextAnimation.reverse();
                }
            },
        });

        
        

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
      }, [scrollDirection]);



      
    return (
        <div className="new-section">
            <nav>
                <div className="logo">
                    <a href="#">Vannes</a>
                </div>
                <div className="links">
                    <a href="#">Home</a>
                    <a href="https://vannesli.netlify.app/" target="_blank">Portfolio</a>
                </div>
            </nav>

            <section className="lottie-container">
            
                <div className="animation">
                    <video autoPlay loop playsInline muted className="videonew">
                        <source src={vids}></source>
                    </video>
                    <div ref={textOverlayRef} className="overlay">
                        <h1 className="text">Im ready for</h1>
                    </div>
                </div>
            </section>

            <section className="gradient">
                <div className="moving-text" ref={movingTextRef}>Endurance Test With Cretivox Endurance Test With Cretivox Endurance Test With Cretivox Endurance Test With Cretivox Endurance Test With Cretivox Endurance Test With Cretivox Endurance Test With Cretivox</div>
            </section>

            <section className="website-content">
                <div className="end-lottie"></div>
                <Hiring />
                <div className="tittle">
                    <h1>About me</h1>
                </div>
                
                <div className="about">
                    <div className="row-about">
                        <div className="about-left">
                            <img src={vannes}></img>
                        </div>
                        <div className="about-right">
                            <p>Hi, im Vannes</p>
                            <div className="paragraph">
                                <p>Someone who likes creating interfaces with a modern and futuristic appearance based on websites. I like creating designs, drawings and programs. So, I chose to pursue an opportunity to experience website design and interface programming
                                <br/>In my opinion, seeking experience is important for a person's future career because from these experiences, we can know how to face, change and overcome a problem. Therefore, I want to introduce the world of work through the Internship Season 2 opportunity at Cretivox. I don't have a lot of experience and portfolio, but with my willingness to keep learning and being willing to try things I can't yet, I'm sure I can give my best.</p>
                            </div>
                        </div>
                    </div>
                    <div className="quotes">
                        <h2>i believe</h2>
                        <p>"ability is not only measured by his ability to do something, but also by his willingness to develop and learn"</p>
                    </div>
                </div>
                
                
                <Kindly/>
                <Check/>
                <Portofolio/>
                <Hero/>
                
                
            </section>
        </div>
    );
}

export default New;
