import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Preloader from '../src/component/preload.jsx';
import Tiktok from "./section/new.jsx";
import Landing from "../src/section/lp.jsx"


function App() {
  const [count, setCount] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fungsi simulasi delay untuk menampilkan preloader dalam beberapa detik
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Ganti nilai 3000 menjadi waktu yang diinginkan dalam milidetik
    return () => clearTimeout(delay); // Membersihkan timeout saat komponen unmount
  }, []);

  return (
    <Router>
    {isLoading ? (
        <Preloader /> // Tampilkan preloader jika isLoading true
      ) : (
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    )}
    </Router>
  );
}

export default App;
