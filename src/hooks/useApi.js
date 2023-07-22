import { useEffect, useState } from 'react'

const useApi = () => {
  const useGet = (url, refetch) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchData = async () => {
        const seed = data?.info?.seed ? `&seed=${data?.info?.seed}` : ''
        const response = await fetch(`${url}${seed}`)
        const resData = await response.json()
        setData(resData)
        setLoading(false)
      }
      fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, refetch])

    return {
      data,
      loading,
      setData
    }
  }

  return {
    useGet
  }
}

export default useApi
