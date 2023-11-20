import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import InputComponent from '../../components/InputComponent/InputComponent'

describe('InputComponent', () => {
  it('should render the component without errors', () => {
    const { getByTestId } = render(<InputComponent />)

    // Check if the component renders correctly
    const textInput = getByTestId('text-input')
    const numericInput = getByTestId('numeric-input')

    expect(textInput).toBeDefined()
    expect(numericInput).toBeDefined()
  })

  it('should update the text input value', () => {
    const { getByTestId } = render(<InputComponent />)

    const textInput = getByTestId('text-input')
    const newValue = 'New Text Value'

    fireEvent.changeText(textInput, newValue)

    expect(textInput.props.value).toBe(newValue)
  })

  it('should update the numeric input value', () => {
    const { getByTestId } = render(<InputComponent />)

    const numericInput = getByTestId('numeric-input')
    const newValue = '12345'

    fireEvent.changeText(numericInput, newValue)

    expect(numericInput.props.value).toBe(newValue)
  })
})
