import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase/config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/dashboard');
//     } catch (err) {
//       setError(mapAuthError(err.code));
//     }
//     setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-[#4f0333]">
          Modern CPA
        </h2>
        <h3 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Sign in to your account
        </h3>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#4f0333] focus:border-[#4f0333] sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#4f0333] focus:border-[#4f0333] sm:text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )} */}

            <div>
              <button
                type="submit"
                // disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#4f0333] hover:bg-[#3a0226] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4f0333] transition-colors"
              >
                {/* {loading ? 'Signing in...' : 'Sign in'} */}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <Link 
              to="/signup" 
              className="font-medium text-[#4f0333] hover:text-[#3a0226]"
            >
              Create new account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Error mapping function
// const mapAuthError = (code) => {
//   const errors = {
//     'auth/invalid-email': 'Invalid email address',
//     'auth/user-disabled': 'Account disabled',
//     'auth/user-not-found': 'Account not found',
//     'auth/wrong-password': 'Incorrect password',
//   };
//   return errors[code] || 'Login failed. Please try again.';
// };


export default Login;