import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import SliderContainer from '../../components/SliderContainer/SliderContainer'

describe('SliderContainer', () => {
  const mockSetRegistro = jest.fn()

  const renderComponent = props => render(
    <SliderContainer
      code="test"
      title="Test Slider"
      minimumValue={0}
      maximumValue={100}
      step={1}
      medida="units"
      fixed={2}
      maxLength={5}
      registro={{ decesos: 0, cantidadAlimento: 0, pesado: 0 }}
      setRegistro={mockSetRegistro}
      {...props}
    />,
  )

  it('should render correctly', () => {
    const { getByText, getByPlaceholderText } = renderComponent()

    expect(getByText('Test Slider')).toBeTruthy()
    expect(getByPlaceholderText('0')).toBeTruthy()
    expect(getByText('0 units')).toBeTruthy()
    expect(getByText('100 units')).toBeTruthy()
  })

  it('should update value on slider change', () => {
    const { getByTestId } = renderComponent()

    const slider = getByTestId('slider')
    fireEvent(slider, 'valueChange', 75)

    expect(mockSetRegistro).toHaveBeenCalledWith({
      decesos: 0,
      cantidadAlimento: 0,
      pesado: 75,
    })
  })

  it('should update value on text input change', () => {
    const { getByPlaceholderText } = renderComponent()

    const input = getByPlaceholderText('0')
    fireEvent.changeText(input, '75')

    expect(mockSetRegistro).toHaveBeenCalledWith({
      decesos: 0,
      cantidadAlimento: 0,
      pesado: 75,
    })
  })

  it('should handle invalid input', () => {
    const { getByPlaceholderText, getByText } = renderComponent()

    const input = getByPlaceholderText('0')
    fireEvent.changeText(input, 'invalid input')

    expect(mockSetRegistro).not.toHaveBeenCalled()
    expect(getByText('Ingrese un número válido')).toBeTruthy()
  })
})
