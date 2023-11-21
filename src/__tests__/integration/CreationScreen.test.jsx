import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import * as Font from 'expo-font' // Import the Font object
import CreationScreen from '../../screens/CreationScreen/CreationScreen'

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(() => ({
    params: {
      idGalera: 'mockIdGalera',
      galera: 'mockGalera',
    },
  })),
}))

// Mock the useContext hook
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(() => ({
    setRefresh: jest.fn(), // Mock the setRefresh function here
    // Add other mocked context values if needed
  })),
}))

// Mock expo-font
jest.mock('expo-font', () => ({
  ...jest.requireActual('expo-font'),
  loadAsync: jest.fn(),
}))

it('handles the "Añadir más registros" button click', async () => {
  // Mock Font loading
  Font.loadAsync.mockResolvedValueOnce()

  const { getByText, queryByText } = render(<CreationScreen />)
  await fireEvent.press(getByText('Añadir más registros'))
  expect(queryByText('Peso total de pollos:')).toBeTruthy() // Check if new slider appears
})

it('handles the "Completar" button click', async () => {
  // Mock Font loading
  Font.loadAsync.mockResolvedValueOnce()

  const { getByText } = render(<CreationScreen />)
  await fireEvent.press(getByText('Completar'))
})
