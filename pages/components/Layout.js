import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Layout({children, pagina = 0}) {
  let laPagina;
  if(pagina == 0){
    laPagina = "/images/logo_blanco.svg"
  } else if(pagina == '3'){
    laPagina = "/images/logo_blanco.svg"
  } else {
    laPagina = "/images/logo.svg"
  }
  console.log(laPagina);
  return (
    <div>
      <Head>
        <title>GESTELL Inteligencia Artificial y Automatización de Procesos para el Sector Financiero</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;700;900&display=swap" rel="stylesheet" /> 
      </Head>

      <div className="cabeza">
        <Link href="/">
          <Image
            src={laPagina}
            alt="Picture of the author"
            width={70}
            height={70}
          />
        </Link>
      </div>

      <div id="top"></div>

      <div>
        {children}
      </div>
      
      <div className="navegacion">
        <ul>
          <li><Link href="/"><a>SOLUCIONES</a></Link>
            <ul className="submenu">
              <li><Link href="/telos"><a>TELOS</a></Link></li>
              <li><Link href="/harpe"><a>HARPE</a></Link></li>
            </ul>
          </li>
          <li><Link href="/producto"><a>PRODUCTO</a></Link></li>
          <li><Link href="/suptech"><a>PLATAFORMA SUPTECH</a></Link></li>
          <li><Link href="/nosotros"><a>ACERCA DE NOSOTROS</a></Link></li>
          <li><Link href="/contacto"><a>CONTACTO</a></Link></li>
        </ul>
      </div>

    </div>
  )
}
