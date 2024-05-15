import "../component/porto.css"
import React, { useEffect, useRef } from 'react';
function Check(){
    const rightRef = useRef(null);

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

        observer.observe(rightRef.current); // Mulai mengamati elemen saat komponen dimuat

        return () => observer.disconnect(); // Hentikan observasi saat komponen di-unmount
    }, []);

    return(
        <>
            <div className="section-portfolio">
                <div className="right" ref={rightRef}>
                    <h1> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        Check 
                    </h1>
                </div>

            </div>
        </>
    )
}
export default Check