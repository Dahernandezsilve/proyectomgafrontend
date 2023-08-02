import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginAdministrator from './LoginAdministrator';
import { act } from 'react-test-renderer'; // Import act from react-test-renderer

// Mock the useApi hook with a resolved promise for handleLogin
jest.mock('../../hooks/useApi/useApi', () => ({
  __esModule: true,
  default: () => [null, null, jest.fn(() => Promise.resolve({ message: 'Good Job', data: [{ rol: 'admin' }] }))],
}));

// Test the LoginAdministrator component
describe('LoginAdministrator component', () => {
  it('should render correctly and call handleLogin on button press', async () => {
    const mockNavigate = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <LoginAdministrator navigation={{ navigate: mockNavigate }} />
    );

    const emailInput = getByPlaceholderText('Correo');
    const passwordInput = getByPlaceholderText('Contraseña');
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();

    const loginButton = getByText('Acceder');
    expect(loginButton).toBeTruthy();

    // Use act from react-test-renderer to perform the button press and handle asynchronous updates
    await act(async () => {
      fireEvent.press(loginButton);
    });

    // Wait for handleLogin to resolve
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('Home'));
  });

  // Add more test cases as needed
});
