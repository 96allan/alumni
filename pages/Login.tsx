
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LoginProps {
    setIsLoggedIn: (loggedIn: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
        setIsLoading(true);
        // Simulate network request
        setTimeout(() => {
            setIsLoggedIn(true);
            navigate('/');
        }, 1500);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-light-bg px-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center text-primary mb-2">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-8">Login to access the alumni dashboard</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                    type="email" 
                    required 
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all disabled:bg-gray-100"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                    type="password" 
                    required 
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all disabled:bg-gray-100"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-600">
                    <input type="checkbox" className="mr-2 text-primary focus:ring-primary rounded" />
                    Remember me
                </label>
                <a href="#" className="text-primary hover:underline">Forgot password?</a>
            </div>
            <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transform active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Logging in...
                    </>
                ) : 'Login'}
            </button>
        </form>
        
        <p className="mt-8 text-center text-gray-600">
            Don't have an account? <Link to="/signup" className="text-secondary font-bold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
