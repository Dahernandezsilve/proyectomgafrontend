import React from 'react'
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react-native'
import { useNavigation } from '@react-navigation/native'
import ReportScreenAdmin from '../../screens/ReportScreenAdmin/ReportScreenAdmin'
import useApi from '../../hooks/useApi/useApi'

// Mock the useNavigation hook manually
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}))

// Mock the useApi hook manually
jest.mock('../../hooks/useApi/useApi', () => ({
  __esModule: true,
  default: () => ({
    handleRequest: jest.fn(),
  }),
}))

describe('ReportScreenAdmin', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  }

  beforeEach(() => {
    useNavigation.mockReturnValue(mockNavigation)
  })

  it('renders the component with the correct title and submenu options', () => {
    render(<ReportScreenAdmin />)
    expect(screen.getByText('Informe')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  it('renders date picker when "Select Date" is pressed', () => {
    render(<ReportScreenAdmin />)
    fireEvent.press(screen.getByText('Seleccionar fecha'))
    expect(screen.getByA11yLabel('datepicker')).toBeTruthy()
  })

  it('updates the selected date when the date is changed', async () => {
    render(<ReportScreenAdmin />)
    fireEvent.press(screen.getByText('Seleccionar fecha'))

    // Mock the date change event
    const newDate = new Date('2023-01-01')
    fireEvent.change(screen.getByA11yLabel('datepicker'), { nativeEvent: { timestamp: newDate.getTime() } })

    await waitFor(() => {
      expect(screen.getByText('01-01-2023')).toBeTruthy()
    })
  })

  it('renders options correctly and updates selected option', () => {
    render(<ReportScreenAdmin />)
    fireEvent.press(screen.getByText('Seleccionar fecha'))
    fireEvent.press(screen.getByText('No seleccionar'))

    // Assert that the selected option is updated
    expect(screen.getByText('No seleccionar')).toBeTruthy()
  })

  // Add more test cases based on your component's functionality
})
