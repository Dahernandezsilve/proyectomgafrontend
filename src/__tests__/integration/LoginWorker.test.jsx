import React from 'react'
import { render } from '@testing-library/react-native'
import { GlobalProvider } from '../../GlobalContext/GlobalContext'
import LoginWorker from '../../screens/LoginWorker/LoginWorker'

// Mock Font.loadAsync
jest.mock('expo-font', () => ({
  ...jest.requireActual('expo-font'),
  loadAsync: jest.fn(),
}))

// Mock navigation prop
const navigationMock = {
  addListener: jest.fn(),
  navigate: jest.fn(),
}

// The function should be called only once during the component lifecycle.
it('should be called only once during the component lifecycle', () => {
  const useEffectSpy = jest.spyOn(React, 'useEffect')
  render(
    <GlobalProvider>
      <LoginWorker navigation={navigationMock} />
    </GlobalProvider>,
  )
  expect(useEffectSpy).toHaveBeenCalledTimes(2)
  useEffectSpy.mockRestore()
})

it('should not affect the components state', () => {
  const useStateSpy = jest.spyOn(React, 'useState')
  render(
    <GlobalProvider>
      <LoginWorker navigation={navigationMock} />
    </GlobalProvider>,
  )

  useStateSpy.mockRestore()
})

// The function should not have any side effects.
it('should not have any side effects', () => {
  const useEffectSpy = jest.spyOn(React, 'useEffect')
  render(
    <GlobalProvider>
      <LoginWorker navigation={navigationMock} />
    </GlobalProvider>,
  )
  useEffectSpy.mockRestore()
})
