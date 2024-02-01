import { useEffect, useRef, useState } from "react"

export function useSearch() {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState('')
    const isFirstInput = useRef(true)
    
    useEffect(()=> {
      if(isFirstInput.current) {
        isFirstInput.current = search === ''
        return
      }
      if(search === '') {
        setError('No puede estar vacio')
        return 
      }
      if(search.match(/^\d+$/)) {
        setError('No se puede buscar una pelicula solo con numeros')
        return 
      }
      if(search.length < 3) {
        setError('No se puede buscar con menos de 3 caracteres')
        return 
      }
      setError()
    },[search])
  
    return { search, updateSearch, error }
  }