import React from 'react';
import axios from 'axios';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mocking useNavigate from react-router-dom
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

// Mocking axios
jest.mock('axios');

describe('Login Page', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock function calls between tests
  });

  it('handles sending OTP on valid mobile number', async () => {
    axios.post.mockResolvedValueOnce({ data: {} });

    const { getByPlaceholderText, getByText } = render(<App />);

    const mobileInput = getByPlaceholderText('Mobile No');
    fireEvent.change(mobileInput, { target: { value: 'validMobileNumber' } });

    const sendOTPButton = getByText('Send OTP');
    fireEvent.click(sendOTPButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        'https://dotmoney-bcknd.onrender.com/otpSend',
        { mobileNo: 'validMobileNumber' },
        { headers: { 'Content-Type': 'application/json' } }
      );
      // Add assertions based on the expected behavior
    });
  });

  it('handles login with valid OTP', async () => {
    axios.post.mockResolvedValueOnce({ data: {} });

    const { getByPlaceholderText, getByText } = render(<App />);

    const otpInput = getByPlaceholderText('Enter OTP:');
    fireEvent.change(otpInput, { target: { value: '123456' } });

    const loginButton = getByText('Login');
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        'https://dotmoney-bcknd.onrender.com/login/validMobileNumber',
        { otp: '123456' },
        { headers: { 'Content-Type': 'application/json' } }
      );
      // Add assertions based on the expected behavior
    });
  });

  // Add more test cases for edge cases, error handling, etc.
});
