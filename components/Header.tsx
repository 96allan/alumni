
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
);

interface HeaderProps {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Directory', href: '/directory' },
    { name: 'Events & News', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLogout = () => {
      setIsLoggedIn(false);
      navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-primary flex items-center gap-2">
            UICT Alumni
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link 
                key={link.name} 
                to={link.href} 
                className={`font-medium transition-colors duration-300 ${isActive(link.href) ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
            >
                {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
            {isLoggedIn ? (
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 font-medium">Welcome, Alumnus</span>
                    <button onClick={handleLogout} className="px-5 py-2 text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-sm font-semibold">
                        Logout
                    </button>
                </div>
            ) : (
                <>
                    <Link to="/login" className="px-5 py-2 text-gray-600 hover:text-primary font-medium transition-colors">
                        Login
                    </Link>
                    <Link to="/signup" className="px-5 py-2 text-white bg-primary rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md text-sm font-semibold">
                        Sign Up
                    </Link>
                </>
            )}
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary focus:outline-none">
            {isMenuOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100`}>
        <div className="flex flex-col items-center space-y-4 py-6">
          {navLinks.map(link => (
            <Link 
                key={link.name} 
                to={link.href} 
                className={`text-lg ${isActive(link.href) ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'} transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
            >
                {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col space-y-3 w-full px-10">
            {isLoggedIn ? (
                <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="w-full px-5 py-3 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                    Logout
                </button>
            ) : (
                <>
                     <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full text-center px-5 py-3 text-gray-600 border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-all">
                        Login
                    </Link>
                    <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="w-full text-center px-5 py-3 text-white bg-primary rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md">
                        Sign Up
                    </Link>
                </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
