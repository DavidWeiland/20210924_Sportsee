import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [info, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

    /*useEffect(() => {
        if (!url) return
        setLoading(true)
        async function fetchData() {
            try {    
                const response = await fetch(url)
                const info = await response.json()
                console.log(response)
            } catch (error) {
                console.log('===== error =====', error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }  
        fetchData()
    }, [url])*/

    useEffect(() => {
        if (!url) return
        setLoading(true)
        fetch(url)
            .then((response) => response.json()
                .then(( info ) => {
                    setData(info)
                    setLoading(false)
                })
                .catch((error) => error ? setError(true) : setError(false))
            )
    }, [url])
    
    return { isLoading, info, error }
}