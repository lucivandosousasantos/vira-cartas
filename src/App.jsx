import { useState } from 'react'
import carta from './assets/baralho-cartas.png'

function App() {
  const [cartaVirada, setCartaVirada] = useState(carta)

  function viraCarta() {
    const numCarta = Math.floor(Math.random()*((12 - 1) + 1)) + 1
    setCartaVirada(`/carts/${numCarta}.png`)
  }

  return (
    <>
      <h1>Virar a carta</h1>
      <div>
        <img src={cartaVirada} onClick={viraCarta}/>
      </div>
    </>
  )
}

export default App
