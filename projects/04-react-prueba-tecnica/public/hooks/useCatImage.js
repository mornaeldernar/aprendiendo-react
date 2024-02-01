import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // efect para la imagen
  useEffect(() => {
    if (!fact) return
    const words = fact.split(' ', 3).join(' ')
    setImageUrl(words)
  }, [fact])

  return { imageUrl: `https://cataas.com/cat/says/${imageUrl}?size=50&fontColor=red` }
}
