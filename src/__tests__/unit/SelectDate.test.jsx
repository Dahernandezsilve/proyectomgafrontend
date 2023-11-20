import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import SelectDate from '../../components/SelectDate/SelectDate'

describe('SelectDate', () => {
  it('should render the component without errors', () => {
    const { getByText, getByTestId } = render(<SelectDate onPress={() => {}} selectedDate={null} />)

    // Check if the component renders correctly
    const selectDateText = getByText('Seleccionar fecha:')
    const testDateText = getByTestId('test-date')

    expect(selectDateText).toBeDefined()
    expect(testDateText).toBeDefined()
  })

  it('should display the selected date', () => {
    const selectedDate = new Date('2023-11-15')
    const { getByTestId } = render(<SelectDate onPress={() => {}} selectedDate={selectedDate} />)

    const testDateText = getByTestId('test-date')

    const formattedDate = `${selectedDate.getDate().toString().padStart(2, '0')}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDate.getFullYear()}`
    expect(testDateText.props.children).toBe(formattedDate)
  })

  it('should call the onPress function when pressed', () => {
    const onPressMock = jest.fn()
    const { getByTestId } = render(<SelectDate onPress={onPressMock} selectedDate={null} />)

    const selectDateButton = getByTestId('select-date-button')
    fireEvent.press(selectDateButton)

    expect(onPressMock).toHaveBeenCalledTimes(1)
  })
})
