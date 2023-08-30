import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ChoiceScreen from '../screens/ChoiceScreen/ChoiceScreen';
import 'setimmediate';

describe('ChoiceScreen component', () => {
  test('renders correctly', () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(<ChoiceScreen navigation={{ navigate: mockNavigate }} />);

    // Check if the component renders the "Trabajador" button
    const trabajadorButton = getByText('Trabajador');
    expect(trabajadorButton).toBeTruthy();

    // Check if the component renders the "Administrador" button
    const administradorButton = getByText('Administador');
    expect(administradorButton).toBeTruthy();
  });

  test('navigates to "Trabajador" screen on "Trabajador" button press', () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(<ChoiceScreen navigation={{ navigate: mockNavigate }} />);

    // Simulate a press event on the "Trabajador" button
    const trabajadorButton = getByText('Trabajador');
    fireEvent.press(trabajadorButton);

    // Check if the navigate function was called with the correct route
    expect(mockNavigate).toHaveBeenCalledWith('Trabajador');
  });

  test('navigates to "Administrador" screen on "Administrador" button press', () => {
    const mockNavigate = jest.fn();
    const { getByText } = render(<ChoiceScreen navigation={{ navigate: mockNavigate }} />);

    // Simulate a press event on the "Administrador" button
    const administradorButton = getByText('Administador');
    fireEvent.press(administradorButton);

    // Check if the navigate function was called with the correct route
    expect(mockNavigate).toHaveBeenCalledWith('Administrador');
  });
});
