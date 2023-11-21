import React from 'react'
import { render } from '@testing-library/react-native'
import MeasurementsHistory from './MeasurementsHistory'

jest.mock('../../hooks/useApi/useApi', () => ({
  __esModule: true,
  default: () => ({
    token: 'yourMockToken',
    handleRequest: jest.fn().mockResolvedValue({
      data: [
        {
          fechaMedicion: '2023-09-25',
          lote: 'Esteban Escalante',
          numeroGalera: 'Raul Vasquez',
          cantidadPollos: '4356 7890',
          tipoPoblacion: '9234 5632',
          edadPollos: '1208 6684',
        },
        // Add more objects if needed
      ],
    }),
  }),
}))

describe('MeasurementsHistory', () => {
  it('renders correctly', async () => {
    const navigation = {
      navigate: jest.fn(),
    }

    const { findByText, queryByText } = render(<MeasurementsHistory navigation={navigation} />)

    // Wait for the component to finish rendering
    const titleElement = await findByText('Mediciones')

    // Add assertions to check if the component renders as expected
    expect(titleElement).toBeTruthy()
    expect(queryByText('25/09/2023')).toBeTruthy()
    expect(queryByText('Esteban Escalante')).toBeTruthy()
    expect(queryByText('Raul Vasquez')).toBeTruthy()
    // Add more assertions as needed based on your component's content
  })

  // Add more test cases as needed
})
