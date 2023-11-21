/* eslint-disable max-len */
import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import CreationScreenAdministrator from '../../screens/CreationScreenAdministrator/CreationScreenAdministrator'
import { GlobalContext } from '../../GlobalContext/GlobalContext'

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}))

// Mock the useRoute hook
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: () => ({
    params: {
      idGalera: 'mockIdGalera',
      galera: 'mockGalera',
    },
  }),
}))

describe('CreationScreenAdministrator', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <NavigationContainer>
        <GlobalContext.Provider value={{ setRefresh: jest.fn(), setSending: jest.fn(), sending: [] }}>
          <CreationScreenAdministrator />
        </GlobalContext.Provider>
      </NavigationContainer>,
    )

    // Add assertions to check if the component renders as expected
    expect(getByText('Mediciones')).toBeTruthy()
  })
})
