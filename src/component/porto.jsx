import "../component/porto.css"
import React, { useEffect, useRef } from 'react';

function portfolio(){
    const midRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible'); 
                } else {
                    entry.target.classList.remove('is-visible'); 
                }
            });
        });

        observer.observe(midRef.current); 

        return () => observer.disconnect(); 
    }, []);
    return(
        <>
            <div className="section-portfolio">
                <div className="mid" ref={midRef}>
                    <h1> My Portfolio </h1>
                    <a href="https://vannesli.netlify.app/" target="_blank"> Click Here </a>
                </div>
                
            </div>
        </>
    )
}
export default portfolio