import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen'; // Adjust the import path accordingly

// Mocking the required dependencies
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('DetailsScreen', () => {
  it('should navigate to Creacion screen when button is pressed', () => {
    const navigationMock = jest.fn();
    const { getByText } = render(
      <DetailsScreen navigation={{ navigate: navigationMock }} />
    );

    const buttonElement = getByText('Ir a creacion de Galeras');
    fireEvent.press(buttonElement);

    // Assert that the navigate function was called with the correct argument
    expect(navigationMock).toHaveBeenCalledWith('Creacion');
  });
});
