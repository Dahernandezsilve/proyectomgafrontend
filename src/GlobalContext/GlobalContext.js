import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [token, setToken] = useState('')
  const [refresh, setRefresh] = useState(true)
  const [sending, setSending] = useState([])

  return (
    <GlobalContext.Provider value={{
      token, setToken, refresh, setRefresh, sending, setSending,
    }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
