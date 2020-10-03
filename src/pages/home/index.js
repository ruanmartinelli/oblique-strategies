import './style.css'
import { h } from 'preact'
import strategies from '../../strategies'
import sample from 'lodash.sample'

import { useEffect, useState } from 'preact/hooks'

const Home = () => {
  const [flipped, setFlipped] = useState(false)
  const [strategy, setStrategy] = useState(null)
  const [counter, setCounter] = useState(10 * 60) // seconds

  const toggleFlip = () => setFlipped(!flipped)

  useEffect(() => {
    setStrategy(sample(strategies))

    const interval = setInterval(() => {
      setCounter((c) => c - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div class="home">
      <div class="header">
        <h1>OBLIQUE STRATEGIES</h1>
        <p class="text-muted">By Brian Eno and Peter Schmidt.</p>
      </div>

      <div class={`card ${flipped ? 'flip' : 'unflip'}`} onClick={toggleFlip}>
        <div class="card-face card-front"></div>
        <div class="card-face card-back">{strategy}.</div>
      </div>

      <div class="footer">
        <p class="text-muted">New card in {counter} seconds.</p>
      </div>
    </div>
  )
}

export default Home
