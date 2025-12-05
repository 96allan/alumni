
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import DirectoryPage from './pages/DirectoryPage';
import EventsPage from './pages/EventsPage';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="bg-white font-sans flex flex-col min-h-screen">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/directory" element={<DirectoryPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
                {/* Fallback route */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
