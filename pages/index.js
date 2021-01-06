import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ReactPageScroller from 'react-page-scroller';
import styles from '../styles/Home.module.css'

import FirstComponent from "./components/pageOne/FirstComponent";
import SecondComponent from "./components/pageOne/SecondComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>GESTELL Inteligencia Artificial y Automatización de Procesos para el Sector Financiero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="cabeza">
        <Image
          src="/images/logo.svg"
          alt="Picture of the author"
          width={70}
          height={70}
        />
      </div>

      <main>
        <ReactPageScroller>
          <FirstComponent />
          <SecondComponent />
        </ReactPageScroller>
      </main>

      <div className="navegacion">
        <ul>
          <li><Link href="/"><a>SOLUCIONES</a></Link></li>
          <li><Link href="/"><a>PRODUCTO</a></Link></li>
          <li><Link href="/"><a>PLATAFORMA SUPTECH</a></Link></li>
          <li><Link href="/"><a>ACERCA DE NOSOTROS</a></Link></li>
          <li><Link href="/"><a>CONTACTO</a></Link></li>
        </ul>
      </div>

    </div>
  )
}
