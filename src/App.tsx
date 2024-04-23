import { FormEvent } from 'react'

import { RouterProvider } from 'react-router-dom'
import { router } from './route'

export function App() {
  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

  }
  return (
    <RouterProvider router={router} />
    //     <main>
    //       {/* <header className='flex justify-between items-center max-w-[1280px] mx-auto'>
    //         <div>
    //           <h1>NEUROLEX</h1>
    //           <span>SISTEMA NERVOSO SANO E FORTE</span>
    //           <ul>
    //             <li>ELIMINA l'ansia e l'irritabilità</li>
    //             <li>NORMALIZZA il sonno</li>
    //             <li>STABILIZZA l'umore</li>
    //             <li>SI RIEMPIE d`energia</li>
    //             <li>AUMENTA la resistenza allo stress</li>
    //           </ul>
    //           <p>DITE ADDIO ALLA DEPRESSIONE,
    // ALL`INSONNIA ED AGLI ATTACCHI DI PANICO!</p>
    //         </div>
    //         <img className="w-52" src={product} alt="" />
    //       <div>
    //       <form action="" onSubmit={handleSubmitForm} className="orderForm">
    //         <input type="text" name="name" placeholder="name" />
    //         <input type="text" name="phone" placeholder="phone" />
    //         <input type="text" name="surname" placeholder="surname" />
    //         <input type="text" name="email" placeholder="email" />
    //         <input type="text" name="country" placeholder="country" />
    //         <input type="text" name="city" placeholder="city" />
    //         <input type="text" name="postcode" placeholder="postcode" />
    //         <input type="text" name="address" placeholder="address" />
    //         <input type="hidden" name="ip" value="" />
    //         <input type="submit" value="Submit" />
    //     </form>
    //       <form action="" onSubmit={handleSubmitForm}>
    //         <input type="hidden" name="sub1" value="{clickid}" /> 
    //         <label htmlFor="">Il tuo nome:</label>
    //         <input type="text" />
    //         <label htmlFor="">Il tuo contatto telefonico:</label>
    //         <input type="text" />
    //         <button type='submit'>Ordinare</button>
    //         </form>
    //         <span>*Questo sconto su una confezione è valido quando si ordina il trattamento completo</span>
    //       </div>
    //       </header> */}

    //     </main>
  )
}
