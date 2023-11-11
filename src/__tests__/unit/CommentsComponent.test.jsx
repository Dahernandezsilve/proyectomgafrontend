import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import PropTypes from 'prop-types'
import CommentsComponent from '../../components/CommentsComponent/CommentsComponent'

// Mock setValue function
const mockSetValue = jest.fn()

describe('CommentsComponent', () => {
  it('renders without errors', () => {
    const { getByPlaceholderText } = render(
      <CommentsComponent setValue={mockSetValue} value="" />,
    )
    const input = getByPlaceholderText('Comentarios u observaciones')
    expect(input).toBeTruthy()
  })

  it('calls setValue when text is entered', () => {
    const { getByPlaceholderText } = render(
      <CommentsComponent setValue={mockSetValue} value="" />,
    )
    const input = getByPlaceholderText('Comentarios u observaciones')
    const text = 'Test comment'
    fireEvent.changeText(input, text)
    expect(mockSetValue).toHaveBeenCalledWith(text)
  })

  it('validates prop types', () => {
    // Use checkPropTypes to validate prop types
    const { propTypes } = CommentsComponent
    const props = { setValue: mockSetValue, value: '' }
    const propErrors = PropTypes.checkPropTypes(propTypes, props, 'prop', CommentsComponent.name)

    expect(propErrors).toBeUndefined()
  })
})
