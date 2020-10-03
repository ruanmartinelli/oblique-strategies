import { h } from 'preact'
import style from './style.css'

import { useState } from 'preact/hooks'

const Home = () => {
  const [flipped, setFlipped] = useState(false)

  const toggleFlip = () => setFlipped(!flipped)

  return (
    <div class="home">
      <div class={`card ${flipped ? 'flip' : 'unflip'}`} onClick={toggleFlip}>
        <div class="card-face card-front">front</div>
        <div class="card-face card-back">back</div>
      </div>
    </div>
  )
}

export default Home
