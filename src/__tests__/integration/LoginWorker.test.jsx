import React from 'react'
import { render } from '@testing-library/react-native'
import LoginWorker from '../../screens/LoginWorker/LoginWorker' // Asegúrate de que la ruta sea correcta
import { GlobalContext } from '../../GlobalContext/GlobalContext' // Asegúrate de que la ruta sea correcta

const mockGlobalContext = {
  setToken: jest.fn(), // Simula la función setToken
}

describe('LoginWorker', () => {
  it('renders LoginWorker component', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <LoginWorker navigation={{ navigate: jest.fn(), addListener: jest.fn() }} />,
      {
        wrapper: ({ children }) => (
          <GlobalContext.Provider value={mockGlobalContext}>{children}</GlobalContext.Provider>
        ),
      },
    )

    // Verifica la existencia de elementos en la pantalla de inicio de sesión
    expect(getByText('Acceder')).toBeTruthy() // Asegúrate de que este texto coincida con tu componente real
    expect(getByPlaceholderText('Código')).toBeTruthy() // Asegúrate de que este texto coincida con tu componente real
    expect(getByTestId('login-button')).toBeTruthy() // Asegúrate de que este identificador coincida con tu componente real
  })
})
