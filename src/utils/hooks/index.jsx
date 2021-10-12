import { useState, useEffect } from 'react'

/**
 * Represents a hook.
 * @function useFetch 
 * @param { String } url
 * @param { Function() } useEffect
 * 
 * @returns { Object } data
 * @returns { Boolean } error
 * @returns { Boolean } isLoading
 */
export function useFetch(url) {

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return
        setLoading(true)
        
        /**
         * Download data from specified URL.
         * @async
         * @function fetchData
         * 
         * @returns { Object } data
         * @returns { Boolean } error
         * @returns { Boolean } isLoading
         */
        async function fetchData() {
            try {    
                const response = await fetch(`http://localhost:5000/user/${url}`)
                const {data} = await response.json()
                setData(data)
            } catch (error) {
                console.log('===== error =====', error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }  
        fetchData()
    }, [url])
    
    return { isLoading, data, error }
}