import "../section/new.css"
import vannes from "../assets/vannes2.jpg";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
function Aboutme(){
    const paragraphRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible'); // Tambahkan kelas is-visible saat masuk viewport
                } else {
                    entry.target.classList.remove('is-visible'); // Hapus kelas is-visible saat keluar viewport
                }
            });
        });

        observer.observe(paragraphRef.current); // Mulai mengamati elemen saat komponen dimuat

        return () => observer.disconnect(); // Hentikan observasi saat komponen di-unmount
    }, []);
    return(
        <>
            <div className="tittle">
                    <h1 >About me </h1>
                </div>
                
                <div className="about">
                    <div className="row-about">
                        <div className="about-left">
                            <img src={vannes}></img>
                        </div>
                        <div className="about-right">
                            <p>Hi, im Vannes 😎</p>
                            <div className="paragraph" ref={paragraphRef} >
                                <p>Someone who likes creating interfaces with a modern and futuristic appearance based on websites. I like creating designs, drawings and programs. So, I chose to pursue an opportunity to experience website design and interface programming.<br/>
                                <br/>In my opinion, seeking experience is important for a person's future career because from these experiences, we can know how to face, change and overcome a problem. I really want to join Cretivox because I want to try a more productive 
                                and relevant world of work. seeing the huge influence, popularity and interest, I think Cretivox is the right place for me to gain knowledge and be creative
                                Therefore, I want to introduce the world of work through the Internship Season 2 opportunity at Cretivox. I don't have a lot of experience and portfolio, but with my willingness to keep learning and being willing to try things I can't yet, I'm sure I can give my best.</p>
                            </div>
                        </div>
                    </div>
                    <div className="quotes" >
                        <h2>I Believe</h2>
                        <p>"ability is not only measured by his ability to do something, but also by his willingness to develop and learn"</p>
                    </div>
                </div>
        </>
    )
}
export default Aboutme