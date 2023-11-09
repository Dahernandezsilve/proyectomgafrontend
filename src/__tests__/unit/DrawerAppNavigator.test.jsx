import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { render, screen, fireEvent } from '@testing-library/react-native'

import App from '../../../App'

describe('Testing react navigation', () => {
  test('screen contains a button linking to the notifications page', async () => {
    const component = (
      <NavigationContainer>
        <App />
      </NavigationContainer>
    )

    render(component)
    const button = await screen.findByText('Go to notifications')

    expect(button).toBeOnTheScreen()
  })

  test('clicking on the button takes you to the notifications screen', async () => {
    const component = (
      <NavigationContainer>
        <App />
      </NavigationContainer>
    )

    render(component)
    const oldScreen = screen.queryByText('Welcome!')
    const button = await screen.findByText('Go to notifications')

    expect(oldScreen).toBeOnTheScreen()

    fireEvent(button, 'press')
    const newScreen = await screen.findByText('This is the notifications screen')

    expect(newScreen).toBeOnTheScreen()
  })
})
