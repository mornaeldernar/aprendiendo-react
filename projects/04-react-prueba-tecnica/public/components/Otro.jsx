import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'imagen' })
  return (
    <>
      {imageUrl && <img src={imageUrl} width='150px' height='150px' />}
    </>
  )
}
