import React from 'react';
import { useAuth } from './Context/userContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const { user, logoutUser, userToken } = useAuth();    const navigate = useNavigate();
    console.log(user);
 // Initialize navigate function from React Router

    const handleLogout = () => {
        logoutUser();
        navigate('/userlogin');
    };
    if (!user) {
        return (
            <>
                  <div className='py-12 text-center text-3xl text-neutral-200'>
                    <h1>Welcome to My Assignment Dashboard!</h1>
                    <p>You are not logged in. Please</p>
                    <div className="flex justify-center gap-4 mt-8">
                        <a href='/userlogin' className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer">Login</a>
                        <a href='/usersignup' className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer">Sign-up</a>
                    </div>
                </div>
            </>
        );
    }

  return (
    <>
  

    <div className='py-3 px-3 text-neutral-50 cursor-pointer' onClick={handleLogout}> Logout</div>


    <div className='py-5 text-neutral-200 items-center flex justify-center'>
        
        <div>
        Hello {user?.name}, you have Successfully logged into dashboard, wanna see my upcominng project? 

        <div className="py-9"> 
        <a href='https://notportfolio-lemon.vercel.app/' class="bg-blue-500  hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer"> let's goo </a>

        </div>
    <div>
        
    </div>
        </div>
 


    </div>
    </>
  )
}

export default Home