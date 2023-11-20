/* eslint-disable max-len */
// eslint-disable-next-line max-len
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import SelectOption from '../../components/SelectOption/SelectOption'

describe('SelectOption', () => {
  const options = ['John Doe', 'Jane Smith', 'Alice Johnson']

  it('should render correctly', () => {
    const { getByText } = render(
      <SelectOption selectedOption={null} options={options} setSelectedOption={() => {}} />,
    )

    expect(getByText('Seleccionar trabajador')).toBeTruthy()
  })

  it('should toggle options on press', () => {
    const { getByText, queryByText } = render(
      <SelectOption selectedOption={null} options={options} setSelectedOption={() => {}} />,
    )

    fireEvent.press(getByText('Seleccionar trabajador'))
    expect(queryByText('No seleccionar')).toBeTruthy()

    fireEvent.press(getByText('Seleccionar trabajador'))
    expect(queryByText('No seleccionar')).toBeFalsy()
  })

  it('should select an option', () => {
    const setSelectedOptionMock = jest.fn()

    const { getByText } = render(

      <SelectOption selectedOption={null} options={options} setSelectedOption={setSelectedOptionMock} />,
    )

    fireEvent.press(getByText('Seleccionar trabajador'))
    fireEvent.press(getByText('John Doe'))

    expect(setSelectedOptionMock).toHaveBeenCalledWith({ idTrabajador: 'id_0', nombre: 'John Doe' })
  })

  it('should handle "No seleccionar" option', () => {
    const setSelectedOptionMock = jest.fn()

    const { getByText } = render(
      <SelectOption selectedOption={null} options={options} setSelectedOption={setSelectedOptionMock} />,
    )

    fireEvent.press(getByText('Seleccionar trabajador'))
    fireEvent.press(getByText('No seleccionar'))

    expect(setSelectedOptionMock).toHaveBeenCalledWith({ nombre: 'No seleccionar' })
  })

  it('should display the selected option', () => {
    const { getByText } = render(
      <SelectOption selectedOption={{ idTrabajador: 'id_0', nombre: 'John Doe' }} options={options} setSelectedOption={() => {}} />,
    )

    expect(getByText('John Doe')).toBeTruthy()
  })
})
