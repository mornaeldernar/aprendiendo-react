import './App.css'
import { useCatImage } from './public/hooks/useCatImage'
import { useCatFact } from './public/hooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>New Fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted with the first three words for ${fact}`} />}
      </section>
    </main>
  )
}
