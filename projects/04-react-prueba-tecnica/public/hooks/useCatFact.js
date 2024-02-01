import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/services'

export function useCatFact () {
  const [fact, setFact] = useState()
  // Efecto para la cita
  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])
  return { fact, refreshFact }
}
