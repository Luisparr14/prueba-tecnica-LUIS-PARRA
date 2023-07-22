import { useEffect, useState } from 'react'

const useApi = () => {
  const useGet = (url, refetch) => {
    const [data, setData] = useState([])
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchData = async () => {
        const seed = info?.seed ? `&seed=${info?.seed}` : ''
        const response = await fetch(`${url}${seed}`)
        const { results, info: resInfo } = await response.json()
        setData(results)
        setInfo(resInfo)
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
