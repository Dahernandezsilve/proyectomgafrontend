import React from 'react'
import { render, waitFor } from '@testing-library/react-native'
import { useNavigation } from '@react-navigation/native'
import GalleryAssignment from '../../screens/GalleryAssignment/GalleryAssignment'
import useApi from '../../hooks/useApi/useApi'

// Mock Expo Asset
jest.mock('expo-asset')

// Mock Expo Font
jest.mock('expo-font', () => ({
  ...jest.requireActual('expo-font'),
  Font: {
    loadAsync: jest.fn(),
    isLoaded: jest.fn().mockReturnValue(true),
  },
}))

// Mock the useNavigation hook manually
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}))

// Mock the useApi hook manually
jest.mock('../../hooks/useApi/useApi')

describe('GalleryAssignment', () => {
  it('renders correctly', async () => {
    // Mock the navigation object returned by useNavigation
    const mockNavigation = {
      navigate: jest.fn(),
    }
    useNavigation.mockReturnValue(mockNavigation)

    // Mock the useApi hook
    const handleRequestMock = jest.fn().mockResolvedValue({
      data: [
        {
          numeroGalera: 1,
          typeChicken: 'Type A',
          existence: 100,
        },
      ],
    })
    useApi.mockReturnValue([null, null, handleRequestMock])

    const { getByText } = render(<GalleryAssignment />)

    // Use waitFor to wait for the asynchronous task to complete
    await waitFor(() => {
      // Add assertions to check if the component renders as expected
      expect(getByText('Lote 1')).toBeTruthy()
    })
  })
})
