import herovideo from "../assets/sword2.mp4"
import "../section/hero.css"
import React, { useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import gsap from "gsap";
import "../section/hero.css";

const Hero = () => {
    const heroRef = useRef(null);
    const textOverlayRef = useRef(null);
    const buttonRef = useRef(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      // Animasi untuk elemen video
      gsap.fromTo(heroRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 1, ease: 'power3.out' }
      );
  
      // Animasi untuk teks overlay
      gsap.fromTo(textOverlayRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
      );
    }, []);
  
    const handleClick = () => {
      gsap.to(buttonRef.current, {
        scale: 1.2,
        duration: 0.3,
        ease: 'power3.out',
        onComplete: () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
            ease: 'power3.in',
            onComplete: () => {
              navigate('/');
            }
          });
        }
      });
    };
  
    return (
      <div className="container-hero">
        <video
          ref={heroRef}
          autoPlay
          loop
          muted
          playsInline
          className="hero"
        >
          <source src={herovideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div ref={textOverlayRef} className="text-overlay">
          <h1>Thankyou!</h1>
          <p>Cretivox</p>
          {/* <a
            ref={buttonRef}
            className="button"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
          >
            get to know me
          </a> */}
        </div>
      </div>
    );
  };
  
  export default Hero;