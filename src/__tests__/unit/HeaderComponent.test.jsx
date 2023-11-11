import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent' // Adjust the import path to match your project structure

const sampleProps = {
  title: 'Header Title',
  customTitles: ['Tab 1', 'Tab 2', 'Tab 3'],
  activeTab: 'Tab 1',
  setActiveTab: jest.fn(),
  styles: { // Replace with your actual styles object
    activeTabButton: 'active-tab-button-style',
  },
}

describe('HeaderComponent', () => {
  it('renders without errors', () => {
    const { getByText, getAllByTestId } = render(
      <HeaderComponent
        title={sampleProps.title}
        customTitles={sampleProps.customTitles}
        activeTab={sampleProps.activeTab}
        setActiveTab={sampleProps.setActiveTab}
        styles={sampleProps.styles}
      />,
    )

    // Check if the component renders correctly
    expect(getByText(sampleProps.title)).toBeTruthy()

    // Check if the custom tab buttons are present
    const tabButtons = getAllByTestId('tab-button')
    expect(tabButtons).toHaveLength(sampleProps.customTitles.length)
  })

  it('calls setActiveTab when a tab is pressed', () => {
    const { getAllByTestId } = render(
      <HeaderComponent
        title={sampleProps.title}
        customTitles={sampleProps.customTitles}
        activeTab={sampleProps.activeTab}
        setActiveTab={sampleProps.setActiveTab}
        styles={sampleProps.styles}
      />,
    )

    // Find the custom tab buttons
    const tabButtons = getAllByTestId('tab-button')

    // Simulate a click on the second tab
    fireEvent.press(tabButtons[1])

    // Check if setActiveTab was called with the correct argument
    expect(sampleProps.setActiveTab).toHaveBeenCalledWith('Tab 2')
  })
})
