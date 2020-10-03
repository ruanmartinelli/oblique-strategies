import { h } from 'preact'
import style from './style.css'
import strategies from '../../strategies'

import { useEffect, useState } from 'preact/hooks'

const Home = () => {
  const [flipped, setFlipped] = useState(false)
  const [strategy, setStrategy] = useState(null)

  const toggleFlip = () => setFlipped(!flipped)

  useEffect(() => {
    setStrategy(strategies[1])
  }, [])

  return (
    <div class="home">
      <div class={`card ${flipped ? 'flip' : 'unflip'}`} onClick={toggleFlip}>
        <div class="card-face card-front"></div>
        <div class="card-face card-back">
          {strategy}
        </div>
      </div>
    </div>
  )
}

export default Home
