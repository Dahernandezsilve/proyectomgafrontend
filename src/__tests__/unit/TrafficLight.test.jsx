import React from 'react'
import { render } from '@testing-library/react-native'
import TrafficLight from '../../components/TrafficLight/TrafficLight'

describe('TrafficLight', () => {
  it('renders correctly with the provided values', () => {
    const topValue = 'Top'
    const middleValue = 'Middle'
    const bottomValue = 'Bottom'

    const { getByText } = render(
      <TrafficLight
        topValue={topValue}
        middleValue={middleValue}
        bottomValue={bottomValue}
      />,
    )

    expect(getByText(topValue)).toBeTruthy()
    expect(getByText(middleValue)).toBeTruthy()
    expect(getByText(bottomValue)).toBeTruthy()
  })
})
