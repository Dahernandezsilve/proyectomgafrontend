import {useState} from 'react'

const useApi = () => {
  const [response, setResponse] = useState({})
  const [loading, setLoading] = useState(false)
  const handleRequest = async (method, path, body = '', token = '') => {
    setLoading(true)
    //fetch
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
    if (method!== 'GET'){
      options.body = JSON.stringify(body)
    }

    console.log('method', method)
    const fetchResponse = await fetch(`https://hexateam.lat/api${path}`, options)
    const JSONresponse = await fetchResponse.json()

    setResponse(JSONresponse)
    setLoading(false)
  }

  return [response, loading, handleRequest]
}

export default useApi
