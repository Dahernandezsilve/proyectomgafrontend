import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import CrearGalera from '../screens/CrearGalera/CrearGalera'

describe('CrearGalera component', () => {
  // prueba de renderizado correcto de pantalla
  it('should render correctly', () => {
    const { getByPlaceholderText, getByText } = render(<CrearGalera />)

    const noGaleraInput = getByPlaceholderText('No.Galera : ')
    const tipoPoblacionInput = getByPlaceholderText('Tipo de población : ')
    const cantidadPollosInput = getByPlaceholderText('Cantidad de pollos : ')
    const asignarTrabajadorButton = getByText('Asignar trabajador')
    const completarButton = getByText('Completar')

    expect(noGaleraInput).toBeTruthy()
    expect(tipoPoblacionInput).toBeTruthy()
    expect(cantidadPollosInput).toBeTruthy()
    expect(asignarTrabajadorButton).toBeTruthy()
    expect(completarButton).toBeTruthy()
  })
})
