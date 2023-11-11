import React from 'react'
import { render } from '@testing-library/react-native'
import TextCard from '../../components/TextCard/TextCard'

describe('TextCard component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<TextCard number={10} />)

    // Check if the component renders the correct text with the given number prop
    const totalAvesText = getByText(/Total de aves:\s*10/)
    expect(totalAvesText).toBeTruthy()
  })

  // Add more test cases as needed
})
