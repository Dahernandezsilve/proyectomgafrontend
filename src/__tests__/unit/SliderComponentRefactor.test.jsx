import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import SliderComponentRefactor from '../../components/SliderComponentRefactor/SliderComponentRefactor'

describe('SliderComponentRefactor', () => {
  it('should render correctly', () => {
    const { getByText, getByTestId } = render(
      <SliderComponentRefactor
        title="Test Slider"
        minimumValue={0}
        maximumValue={100}
        step={1}
        medida="units"
        value={50}
        setValue={() => {}}
      />,
    )

    expect(getByText('Test Slider')).toBeTruthy()
    expect(getByTestId('slider-test')).toBeTruthy() // Adjust the test ID based on your component structure
    expect(getByText('0 units')).toBeTruthy()
    expect(getByText('100 units')).toBeTruthy()
  })

  it('should update value on slider change', () => {
    const setValueMock = jest.fn()

    const { getByTestId } = render(
      <SliderComponentRefactor
        title="Test Slider"
        minimumValue={0}
        maximumValue={100}
        step={1}
        medida="units"
        value={50}
        setValue={setValueMock}
      />,
    )

    const slider = getByTestId('slider-test') // Adjust the test ID based on your component structure
    fireEvent(slider, 'valueChange', 75) // Use fireEvent directly for the change event

    expect(setValueMock).toHaveBeenCalledWith(75)
  })

  it('should update value on text input change', () => {
    const setValueMock = jest.fn()

    const { getByPlaceholderText } = render(
      <SliderComponentRefactor
        title="Test Slider"
        minimumValue={0}
        maximumValue={100}
        step={1}
        medida="units"
        value={50}
        setValue={setValueMock}
      />,
    )

    const input = getByPlaceholderText('0')
    fireEvent.changeText(input, '75')

    expect(setValueMock).toHaveBeenCalledWith(75)
  })
})
