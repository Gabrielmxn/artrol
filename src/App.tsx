import { FormEvent } from 'react'
import product from './assets/product.png'
import { drCashApi } from './utils/dr-cash-api'

export function App() {
  function handleSubmitForm(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    drCashApi()
  }
  return (
    <main>
      <header className='flex justify-between items-center max-w-[1280px] mx-auto'>
        <div>
          <h1>NEUROLEX</h1>
          <span>SISTEMA NERVOSO SANO E FORTE</span>
          <ul>
            <li>ELIMINA l'ansia e l'irritabilità</li>
            <li>NORMALIZZA il sonno</li>
            <li>STABILIZZA l'umore</li>
            <li>SI RIEMPIE d`energia</li>
            <li>AUMENTA la resistenza allo stress</li>
          </ul>
          <p>DITE ADDIO ALLA DEPRESSIONE,
ALL`INSONNIA ED AGLI ATTACCHI DI PANICO!</p>
        </div>
        <img className="w-52" src={product} alt="" />
      <div>
      <form action="" onSubmit={handleSubmitForm}>
        <label htmlFor="">Il tuo nome:</label>
        <input type="text" />
        <label htmlFor="">Il tuo contatto telefonico:</label>
        <input type="text" />
        <button type='submit'>Ordinare</button>
        </form>
        <span>*Questo sconto su una confezione è valido quando si ordina il trattamento completo</span>
      </div>
      </header>
    </main>
  )
}
