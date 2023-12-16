
import React, {  useEffect, useState } from 'react';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';


import './App.css';

function Signup() {

    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
   
    const [aadhaarImage, setAadhaarImage] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const handleFileChange = (event, type) => {
        const file = event.target.files[0];
        switch (type) {
            case "aadhaarImage":
                setAadhaarImage(file);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
   

        if (mobileNo.length !== 10 || isNaN(mobileNo)) {
            alert('Mobile number should be 10 digits long and contain only numbers');
            return;
        }

        const formData = new FormData();
        const DOB = "08/08/1999"
        const GST_Number = "12345689"

        formData.append("documentImage", aadhaarImage);
        formData.append("name", name);
        formData.append("DOB", DOB);
        formData.append("mobileNo", mobileNo);
        formData.append("documentNo", GST_Number)
        console.log(JSON.stringify(formData))

        try {
            const response = await axios.post('https://dotmoney-bcknd.onrender.com/register', formData);
            console.log('Registration successful', response.data);
            navigate("/userlogin")

        } catch (error) {
            console.error(' Failed', error);
        }
        finally {
            setLoading(false); // Set loading to false when the request is completed (success or failure)
        }
    };






  return (
    <div className="App">
 <div className="flex flex-col ">
 <div
  className=" flex-1 flexflex-col items-left max-w-sg mx-auto px-4 py-8"

>
        <div
          className="flex flex-col p-6 rounded-2xl shadow-md shadow-white bg-black "
        
        >
          <h1 className="text-center text-5xl mb-6 text-neutral-200">Sign Up</h1>
<form onSubmit={handleSubmit} encType="multipart/form-data"  className='flex flex-col items-left max-w-sg mx-auto bg-black'>

    <label className='text-neutral-200  '>
Name
  
          <input
            id="name"
            type="text"
            className="w-auto border border-white p-4 mb-8 mt-6 mx-8 rounded-lg focus: text-gray-200 placeholder-gray-200    focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
            placeholder="Your Beautiful Name"

            value={name}
            onChange={(e) => setName(e.target.value)}
          />
  </label>
  <label className='text-neutral-200'>

Mobile No.
          <input
            id="email"
            type="text"
            className="w-auto mb-8 mt-6 mx-8 rounded-lg shadow-none text-gray-200 placeholder-gray-200  border border-white p-4 border-t-transparent bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
            placeholder="Mobile No. that you don't share with anyone"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
  </label>
  <label className='text-neutral-200'>

    Your Profile Picture 
          <input
            id="password"
            type="file" name="aadhaarImage" accept=".pdf,.jpg,.png" onChange={(e) => handleFileChange(e, "aadhaarImage")}
            className="text-gray-200 w-auto mb-8 mt-6 mx-8 rounded-lg bg-transparent border-gray-200 border-t-transparent placeholder-gray-200 focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
            placeholder="upload Profile"
          />
  </label>
        

          <button type="submit"
            className="relative inline-flex items-center justify-center p-0.5 mb-8 mt-6 mx-8 overflow-hidden text-sm font-medium text-neutral-200 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none dark:focus:ring-blue-800"
          >
            <span
              className="relative text-lg w-full px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            >
              Create Account
            </span>
          </button>
        
</form>

         
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

export default Signup;
