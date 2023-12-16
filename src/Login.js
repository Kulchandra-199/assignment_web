import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Context/userContext';




function App() {


    const navigate = useNavigate();

    const [mobileNo, setMobileNo] = useState("");
    const [otp, setOtp] = useState('');
    const [error, setError] = useState(null);
    const [otpSent, setOtpSent] = useState(false);
    const { loginUser } = useAuth();
    const [loading, setLoading] = useState(false); // New loading state


    const handleSendOTP = async (e) => {
        const requestData = {
            mobileNo: mobileNo,
        };

        try {
            setLoading(true); // Set loading to true when sending OTP
            const response = await axios.post('https://dotmoney-bcknd.onrender.com/otpSend', requestData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("Registration success", response.data);
            setOtpSent(true);
            setError(null);
        } catch (error) {
            console.log("Registration Failed", error);
            setError("Login failed. Please try again.");
        } finally {
            setLoading(false); // Set loading to false when OTP is sent (success or failure)
        }
    };

    const handleLogin = async (e) => {
        const requestedData = {
            otp: otp,
        };

        try {
            setLoading(true); // Set loading to true when attempting login
            const response = await axios.post(`https://dotmoney-bcknd.onrender.com/login/${mobileNo}`, requestedData, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            console.log("success", response.data)
            const userData = response.data.user;
            const userToken = response.data.user.token

            loginUser(userData, userToken);
            navigate("/home");

        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false); // Set loading to false when login attempt finishes (success or failure)
        }
    };






  return (
    <div className="App">
 <div className="flex flex-col min-h-screen">
 <div
  className="container flex-1 flexflex-col items-center max-w-lg mx-auto px-4 py-8"

>
        <div
          className="flex flex-col p-6 rounded-2xl shadow-md shadow-white bg-black"
        
        >

          <h1 className="text-center text-5xl mb-6 text-neutral-200">Login</h1>
<label  className='text-neutral-200 '> 
Mobile No.
          <input
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            id="name"
            type="number"
            className="w-auto mb-8 mt-6 mx-8 border border-white p-4 rounded-lg focus: text-gray-200  placeholder-gray-200 border-gray-200  focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
            placeholder="Mobile No"
          />
</label>



{otpSent ? (
                        <div>
                            <div>
                                <label className='text-neutral-200 '>Enter OTP:</label>
                                <input
                                            className="w-auto mb-8 mt-6 mx-8 border border-white p-4 rounded-lg focus: text-gray-200  placeholder-gray-200 border-gray-200 bg-transparent  focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
                                    type='text1' 
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                        </div>
                    ) : null}

                    {error && <p                         className="bg-slate-50"
>{error}</p>}

                    {/* <button
                        className="bg-slate-50"
                        onClick={loading ? null : (otpSent ? handleLogin : handleSendOTP)} // Disable button when loading
                    >
                        {loading ? 'Loading...' : (otpSent ? 'Login' : 'Send OTP')}
                    </button> */}

         

          <button
            onClick={loading ? null : (otpSent ? handleLogin : handleSendOTP)}
            className="relative inline-flex items-center justify-center p-0.5 mb-8 mt-6 mx-8 overflow-hidden text-sm font-medium text-neutral-200 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none dark:focus:ring-blue-800"
          >
            <span
              className="relative text-lg w-full px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            >
              {loading ? 'Loading..fingercrossed' : (otpSent ? 'Login' : 'Send OTP')}
            </span>
          </button>
        

<div className='text-neutral-200 py-4 cursor-pointer' onClick={() => navigate('/usersignup')}>
    Wanna Sing up first? signup
</div>
         
        </div>
      </div>
      
    </div>

    <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
    </div>
    </div>
  );
}

export default App;
