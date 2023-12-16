import React from 'react';
import axios from 'axios';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Signup from '../Signup';

// Mocking axios
jest.mock('axios');

describe('Signup Page', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock function calls between tests
  });

  it('submits the signup form with valid data', async () => {
    axios.post.mockResolvedValueOnce({ data: {} });

    const { getByLabelText, getByText } = render(<Signup />);

    const nameInput = getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const mobileNoInput = getByLabelText('Mobile No.');
    fireEvent.change(mobileNoInput, { target: { value: '1234567890' } });

    // Mock a file for Aadhaar image upload
    const file = new File(['dummy content'], 'dummyImage.png', { type: 'image/png' });
    const aadhaarImageInput = getByLabelText('Your Profile Picture');
    fireEvent.change(aadhaarImageInput, { target: { files: [file] } });

    const submitButton = getByText('Create Account');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        'https://dotmoney-bcknd.onrender.com/register',
        expect.any(FormData) // Check that FormData is sent
      );
      // Add assertions based on the expected behavior
    });
  });

  // Add more test cases for different scenarios, edge cases, error handling, etc.
});
