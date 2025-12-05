
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface SignupProps {
    setIsLoggedIn: (loggedIn: boolean) => void;
}

const Signup: React.FC<SignupProps> = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate signup network request
    setTimeout(() => {
        setIsLoggedIn(true);
        navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-light-bg px-6 py-12">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-center text-primary mb-2">Create Account</h2>
        <p className="text-center text-gray-600 mb-8">Join the UICT Alumni Network today</p>
        
        <form onSubmit={handleSignup} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" required disabled={isLoading} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none disabled:bg-gray-100" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" required disabled={isLoading} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none disabled:bg-gray-100" />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" required disabled={isLoading} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none disabled:bg-gray-100" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                 <select disabled={isLoading} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none disabled:bg-gray-100">
                    <option>Select Year</option>
                    {[...Array(30)].map((_, i) => (
                        <option key={i} value={2024 - i}>{2024 - i}</option>
                    ))}
                </select>
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" required disabled={isLoading} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none disabled:bg-gray-100" />
            </div>
            <div className="pt-2">
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-secondary text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transform active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Signing Up...
                        </>
                    ) : 'Sign Up'}
                </button>
            </div>
        </form>
        
        <p className="mt-8 text-center text-gray-600">
            Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
