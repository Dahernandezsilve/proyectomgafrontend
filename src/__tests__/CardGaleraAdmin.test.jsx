import React from 'react'
import { render } from '../../test-utils'
import CardGaleraAdmin from '../components/CardGaleraAdmin/CardGaleraAdmin'

describe('CardGaleraAdmin component', () => {
  test('renders without errors', () => {
    const { getByTestId } = render(
      <CardGaleraAdmin
        ca="red"
        msgCA="Sample Message: "
        numberCA={42}
        customValues={{ key1: 'Value 1', key2: 'Value 2' }}
        customTitles={['Title 1', 'Title 2']}
        navigateToGaleras={() => {}}
      />,
    )

    expect(getByTestId('card-galera')).toBeTruthy()
  })
})
