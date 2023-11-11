import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import HeaderGallery from '../../components/HeaderGallery/HeaderGallery'

import '@testing-library/jest-native/extend-expect'

const sampleProps = {
  lotes: ['A', 'B', 'C'],
  title: 'Header Title',
  activeTab: 'A',
  setActiveTab: jest.fn(),
  styles: {
    activeTabButton: {
      // Define the styles for the active tab button
      // For example: backgroundColor: 'blue', color: 'white', etc.
    },
  },
}

describe('HeaderGalley', () => {
  it('renders without errors', () => {
    const { getByText, getAllByTestId } = render(
      <HeaderGallery
        lotes={sampleProps.lotes}
        title={sampleProps.title}
        activeTab={sampleProps.activeTab}
        setActiveTab={sampleProps.setActiveTab}
      />,
    )

    // Check if the component renders correctly
    expect(getByText(sampleProps.title)).toBeTruthy()

    // Check if the tab buttons are present
    const tabButtons = getAllByTestId('tab-button')
    expect(tabButtons).toHaveLength(sampleProps.lotes.length)

    // Check if the active tab is highlighted
    expect(getByText('Lote: A')).toHaveStyle(sampleProps.activeTab === 'A' ? sampleProps.styles.activeTabButton : null)
  })

  it('calls setActiveTab when a tab is pressed', () => {
    const { getAllByTestId } = render(
      <HeaderGallery
        lotes={sampleProps.lotes}
        title={sampleProps.title}
        activeTab={sampleProps.activeTab}
        setActiveTab={sampleProps.setActiveTab}
      />,
    )

    // Find the tab buttons
    const tabButtons = getAllByTestId('tab-button')

    // Simulate a click on the second tab
    fireEvent.press(tabButtons[1])

    // Check if setActiveTab was called with the correct argument
    expect(sampleProps.setActiveTab).toHaveBeenCalledWith('B')
  })
})
