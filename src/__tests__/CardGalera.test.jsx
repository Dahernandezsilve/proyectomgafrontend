import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import CardGalera from '../components/CardGalera/CardGalera'

describe('CardGalera component', () => {
  test('renders without errors', () => {
    const mockNavigateToGaleras = jest.fn()

    const { getByText, getByTestId } = render(
      <CardGalera
        galera="Test Galera"
        ca="blue"
        navigateToGaleras={mockNavigateToGaleras}
      />,
    )

    // Check if the component renders the correct galera text
    expect(getByText('Test Galera')).toBeTruthy()

    // Check if the component renders the "C.A" text
    expect(getByText('C.A')).toBeTruthy()

    // Check if the component renders the square element with the correct background color
    const square = getByTestId('animated-view')
    expect(square).toBeTruthy()
    expect(square.props.style.backgroundColor).toBe('#FFFFFF')
  })

  test('calls navigateToGaleras on press', () => {
    const mockNavigateToGaleras = jest.fn()

    const { getByTestId } = render(
      <CardGalera
        galera="Test Galera"
        ca="blue"
        navigateToGaleras={mockNavigateToGaleras}
      />,
    )

    // Simulate a press event on the component
    const animatedView = getByTestId('animated-view')
    fireEvent.press(animatedView)

    // Check if the navigateToGaleras function was called
    expect(mockNavigateToGaleras).toHaveBeenCalledTimes(1)
  })
})
