import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import ChoiceScreen from '../../screens/ChoiceScreen/ChoiceScreen'
import 'setimmediate'

test('navigates to "Trabajador" screen on "Trabajador" button press', () => {
  const mockNavigate = jest.fn()
  const { getByText } = render(<ChoiceScreen navigation={{ navigate: mockNavigate }} />)

  // Simulate a press event on the "Trabajador" button
  const trabajadorButton = getByText('Trabajador')
  fireEvent.press(trabajadorButton)

  // Check if the navigate function was called with the correct route
  expect(mockNavigate).toHaveBeenCalledWith('Trabajador')
})

it('should not have any specific behaviour to test', () => {
  expect(true).toBe(true)
})
