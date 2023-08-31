import { useState, useContext } from 'react'
import { GlobalContext } from '../../GlobalContext/GlobalContext'

const useApi = () => {
  const { token } = useContext(GlobalContext)
  const [response, setResponse] = useState({})
  const [loading, setLoading] = useState(false)
  const handleRequest = async (method, path, body = '') => {
    setLoading(true)
    // fetch
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    if (method !== 'GET') {
      options.body = JSON.stringify(body)
    }

    // console.log('method', method)
    const fetchResponse = await fetch(`http://3.22.42.192/api${path}`, options)
    const JSONresponse = await fetchResponse.json()

    setResponse(JSONresponse)
    setLoading(false)
  }

  return [response, loading, handleRequest]
}

export default useApi
