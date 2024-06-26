import { CheckCircle, X } from '@phosphor-icons/react'
import imgLogo from '../assets/barbeador.png'
import barCort from '../assets/barcort.jpg'
import cort from '../assets/cort.jpg'
import photo1 from '../assets/photo1.jpg'
import photo3 from '../assets/foto3.jpg'
import original from '../assets/original.jpg'
import cod from '../assets/cod.jpg'

import espec from '../assets/espec.jpg'
export function Home() {
  return (
    <main className='bg-gray-100 h-screen'>
      <a href="#KUPTERAZ" className='z-50 fixed bg-green-500 py-2 px-4 rounded-sm text-white font-semibold top-4 right-4' >
        KUP TERAZ
      </a>
      <header className='flex justify-center items-center bg-gray-900 text-white p-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>MINI GOLARKA ELEKTRYCZNA</h1>
          <p>NAJNOWSZA INNOWACJA JAPOŃSKA</p>
          <p>DOKŁADNA I GŁADKA</p>
          <div className='flex flex-col justify-center items-center mt-4'>
            <span className='text-sm text-yellow-200'>SPECJALNA ZNIŻKA PROMOCYJNA DO 60%</span>
            <span className='text-xs'>(Promocja Ograniczona Czasowo)</span>
          </div>
        </div>
        <img className="hidden md:block w-80" src={imgLogo} alt="" />
      </header>
      <section className='my-8 max-w-[1280px] mx-auto p-1'>
        <h2 className='text-2xl text-center font-bold'>Czy często zacinasz się podczas golenia brody?</h2>
        <div className='relative mx-auto my-4 '>
          <div className='relative w-full '>
            <img className="w-full md:w-96 rounded mx-auto" src={barCort} alt="" />
            <X className='absolute text-red-500/80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' size={200} />
          </div>
        </div>
        <p><span className='text-blue-700'>To Już Koniec Twoich Zmartwień!!</span>  Czas przesiąść się na ManShaver, mini golarkę elektryczną o ostrzach golących dopasowujących się do krzywizny twarzy. Zapewnia komfortowe i wydajne możliwości dokładnego golenia. Nadaje się zarówno dla mężczyzn jak i kobiet. Możesz urozmaicić swój wygląd gdziekolwiek i kiedykolwiek chcesz.</p>
        <div>
          <div className='flex flex-col md:flex-row justify-center items-center gap-8 border p-4 rounded shadow-sm mt-4 bg-gray-900 text-white'>
            <div className='flex flex-col gap-4 justify-center items-start'>
              <h2 className='font-bold text-2xl'>NIESAMOWITA JAKOŚĆ</h2>
              <div className='flex justify-center items-center gap-2'>
                <CheckCircle className=' text-green-400 text-[20px]' />
                <p className='flex-1'>Ostre i precyzyjne golenie, bezpiecznie i szybko bez kaleczenia skyry</p>
              </div>
              <div className='flex justify-center items-center gap-4'>
                <CheckCircle className='text-green-400 text-[20px]' />
                <p className='flex-1'>Wodoodporny – można go używać na mokro lub na sucho</p>
              </div>
              <div className='flex justify-center items-center gap-4'>
                <CheckCircle className='text-green-400 text-[20px]' />
                <p className='flex-1'>Ergonomicznie zaprojektowana, łatwo i wygodnie trzyma się jej jedna dłoń.</p>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <CheckCircle className='text-green-400 text-[20px]' />
                <p className='flex-1'>Mały rozmiar i lekka waga, łatwa w noszeniu</p>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <CheckCircle className='text-green-400 text-[20px]' />
                <p className='flex-1'>Szybkie ładowanie w jedną godzinę, dłuższa wytrzymałość</p>
              </div>
            </div>
            <div className='flex flex-row md:flex-col justify-center items-center gap-1'>
              <img className="w-20 rounded" src={cort} alt="" />
              <img className="w-20 rounded" src={photo1} alt="" />
              <img className="w-20 rounded" src={photo3} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='w-full flex flex-col md:flex-row max-w-[1280px] mx-auto  justify-center gap-20 items-center p-1 mb-8'>
        <div>
          <h2 className='text-xl font-semibold mb-4'>SPECYFIKACJA</h2>
          <p>Materiał: ABS + Proces galwanizacji</p>
          <p>Pojemność: 300mAh</p>
          <p>Czas ładowania: 1 godzina</p>
          <p>Moc: 3W</p>
          <p>Napięcie Wejściowe: 5V</p>
          <p>Opakowanie: 10 x 9,3 x 4,8 cm</p>
          <p>Wymiary produktu: 6,5 x 4,6 cm</p>
          <p>Waga produktu: 67 g</p>
        </div>
        <div>
          <img className="w-96 drop-shadow-lg p-4 rounded" src={espec} alt="" />


        </div>
      </section>
      <section className=' max-w-96 mx-auto shadow rounded p-8 bg-gray-900 text-white mb-8'>
        <div>
          <h2 className='text-2xl mb-4'>Kup już teraz i załap się na cenę promocyjną: </h2>
          <div className='flex justify-start items-center gap-2'>
            <CheckCircle className='text-green-400' size={24} />
            <p> -50% zniżki w promocji</p>
          </div>
          <div className='flex justify-start items-center gap-2 mb-4'>
            <CheckCircle className='text-green-400' size={24} />
            <p> Płatność przy Odbiorze</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center my-4'>
          <p className='text-center text-yellow-400'>DZISIEJSZA PROMOCJA SPECJALNA DO 60% ZNIŻKI</p>
          <span>(Promocja Ograniczona)</span>
          <span>Cena normalna</span>
          <span className='text-red-500 line-through'>318 PLN</span>
          <span>Dzisiejsza Promocja</span>
          <span>Zakup Promocyjny 1 za <span className='text-green-500'>159 PLN</span></span>
        </div>
        <form id="KUPTERAZ" className="orderForm">
          <input type="hidden" name="sub1" value="{clickid}" />
          <div className='flex flex-col gap-1 mb-2'>
            <label htmlFor="">Il tuo nome:</label>
            <input required className="text-gray-950 p-2 border-2 border-gray-900/20 rounded outline-none focus:border-2 focus:border-blue-500" type="text" placeholder='Twoje imię' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="">Il tuo contatto telefonico:</label>
            <input required className="text-gray-950 p-2 border-2 border-gray-900/20 rounded outline-none focus:border-2 focus:border-blue-500" type="text" placeholder='NIE. swojego WhatsAppa' />
          </div>
          <button className="w-full p-2 rounded mt-4 bg-green-400 font-normal text-black hover:text-white hover:bg-green-600 transform duration-200 ease-in-out" type='submit'>KUP TERAZ</button>
        </form>
      </section>
      <img className='mx-auto my-4 rounded' src={cod} alt="" />
      <img className='mx-auto max-w-80 rounded' src={original} alt="" />
      <footer className="w-full p-4 bg-gray-950 mb-0">
        <div className='flex flex-col gap-0 text-white justify-center items-center'>
          <span className='text-sm'>dibuat dengan</span>
          <span className='text-3xl font-bold '>berdu</span>
        </div>
      </footer>
    </main>
  )
}