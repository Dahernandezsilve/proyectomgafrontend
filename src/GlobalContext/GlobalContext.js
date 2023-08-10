import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [token, setToken] = useState('')

  return (
    <GlobalContext.Provider value={{ token, setToken }}>
      {children}
    </GlobalContext.Provider>
  )
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
