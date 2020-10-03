import './style.css'
import { h } from 'preact'
import sample from 'lodash.sample'
import strategies from '../../strategies'
import { useEffect, useState } from 'preact/hooks'

const delay = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000))

const Home = () => {
  const initialStrategy = localStorage.getItem('strategy') ?? sample(strategies)

  const [flipped, setFlipped] = useState(true)
  const [strategy, setStrategy] = useState(initialStrategy)

  const toggleFlip = () => setFlipped(!flipped)

  const updateStrategy = () => {
    const strategy = sample(strategies)
    localStorage.setItem('strategy', strategy)
    setStrategy(strategy)
  }

  useEffect(() => {
    if (flipped) return

    return async () => {
      await delay(0.5)
      updateStrategy()
    }
  }, [flipped])

  return (
    <div class="home">
      <div class="header">
        <h1>OBLIQUE STRATEGIES</h1>
        <p class="text-muted">By Brian Eno and Peter Schmidt.</p>
      </div>

      <div class={`card ${flipped ? 'flip' : 'unflip'}`} onClick={toggleFlip}>
        <div class="card-face card-front"></div>
        <div class="card-face card-back">{strategy}</div>
      </div>

      <div class="footer">
        <p class="text-muted"></p>
      </div>
    </div>
  )
}

export default Home
