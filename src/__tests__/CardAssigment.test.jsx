import React from 'react'
import {
  act, render, screen, userEvent, waitFor,
} from '@testing-library/react-native'
import CardAssignment from '../components/CardAssignment/CardAssignment'

const mockWorkers = [
  {
    id_trabajador: 1,
    nombre: 'John Doe',
    telefono: '123-456-7890',
    direccion: '123 Main St',
    puesto: 'Manager',
    img: 'https://example.com/image.jpg',
  },
  {
    id_trabajador: 2,
    nombre: 'Jane Smith',
    telefono: '987-654-3210',
    direccion: '456 Elm St',
    puesto: 'Supervisor',
    img: 'https://example.com/image.jpg',
  },
]

jest.mock('../hooks/useApi/useApi', () => () => ([
  { data: mockWorkers },
  false,
  jest.fn().mockResolvedValue({}),
]))

describe('CardAssignment', () => {
  // Renders the component without crashing
  it('should render the component without crashing', () => {
    render(<CardAssignment customValues={{}} customTitles={[]} selectedGalera={1} />)
  })

  // Displays the custom values and titles passed as props
  it('should display the custom values and titles passed as props', () => {
    const customValues = {
      nombre: 'John Doe',
      telefono: '123-456-7890',
      direccion: '123 Main St',
      puesto: 'Manager',
    }
    const customTitles = ['Nombre:', 'Telefono:', 'Direccion:', 'Puesto:']
    render(<CardAssignment
      customValues={customValues}
      customTitles={customTitles}
      selectedGalera={1}
    />)
    expect(screen.getByText('John Doe')).toBeTruthy()
    expect(screen.getByText('123-456-7890')).toBeTruthy()
    expect(screen.getByText('123 Main St')).toBeTruthy()
    expect(screen.getByText('Manager')).toBeTruthy()
  })

  // Displays the worker information obtained from the API
  it('should display the worker information obtained from the API', async () => {
    render(<CardAssignment customValues={{}} customTitles={[]} selectedGalera={1} />)

    act(() => {
      userEvent.press(screen.getByTestId('card-galera'))
    })

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeTruthy()
      expect(screen.getByText('123-456-7890')).toBeTruthy()
      expect(screen.getByText('123 Main St')).toBeTruthy()
      expect(screen.getByText('Manager')).toBeTruthy()
      expect(screen.getByText('Jane Smith')).toBeTruthy()
      expect(screen.getByText('987-654-3210')).toBeTruthy()
      expect(screen.getByText('456 Elm St')).toBeTruthy()
      expect(screen.getByText('Supervisor')).toBeTruthy()
    })
  })
})
