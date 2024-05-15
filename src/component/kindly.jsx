import React, { useEffect, useRef } from 'react';
import "../component/porto.css";

function kindly() {
    const leftRef = useRef(null);

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

        observer.observe(leftRef.current); // Mulai mengamati elemen saat komponen dimuat

        return () => observer.disconnect(); // Hentikan observasi saat komponen di-unmount
    }, []);

    return (
        <div className="section-portfolio" >
            <div className="left" ref={leftRef}>
                <h1> Kindly 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </h1>
            </div>
        </div>
    );
}

export default kindly;
