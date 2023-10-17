import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import CardGalera from ''

describe('CardGalera Component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId, getByText } = render(
      <CardGalera navigateToGaleras={() => {}} />,
    )

    // Check if the component renders without crashing
    const card = getByTestId('animated-view')
    expect(card).toBeTruthy()

    // Check default values
    const defaultGaleraText = getByText('Default')
    expect(defaultGaleraText).toBeTruthy()

    // Check for the absence of the loading spinner
    const loadingSpinner = getByTestId('loading-spinner')
    expect(loadingSpinner).toBeNull()
  })

  it('renders with custom props', () => {
    const { getByTestId, getByText } = render(
      <CardGalera
        idGalera="123"
        galera="Custom Galera"
        ca="blue"
        loading
        navigateToGaleras={() => {}}
      />,
    )

    // Check if the component renders with custom props
    const card = getByTestId('animated-view')
    expect(card).toBeTruthy()

    // Check custom values
    const customGaleraText = getByText('Custom Galera')
    expect(customGaleraText).toBeTruthy()

    // Check for the presence of the loading spinner
    const loadingSpinner = getByTestId('loading-spinner')
    expect(loadingSpinner).toBeTruthy()
  })

  it('handles press correctly when not loading', () => {
    const navigateToGalerasMock = jest.fn()
    const { getByTestId } = render(
      <CardGalera
        idGalera="123"
        galera="Custom Galera"
        ca="blue"
        loading={false}
        navigateToGaleras={navigateToGalerasMock}
      />,
    )

    const card = getByTestId('animated-view')
    fireEvent.press(card)

    // Check if the navigateToGaleras function was called with the correct arguments
    expect(navigateToGalerasMock).toHaveBeenCalledWith('123', 'Custom Galera')
  })

  it('does not handle press when loading', () => {
    const navigateToGalerasMock = jest.fn()
    const { getByTestId } = render(
      <CardGalera
        idGalera="123"
        galera="Custom Galera"
        ca="blue"
        loading
        navigateToGaleras={navigateToGalerasMock}
      />,
    )

    const card = getByTestId('animated-view')
    fireEvent.press(card)

    // Check if the navigateToGaleras function was not called when loading is true
    expect(navigateToGalerasMock).not.toHaveBeenCalled()
  })
})
