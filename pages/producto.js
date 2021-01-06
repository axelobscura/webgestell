import React from "react";
import Layout from './components/Layout'
import ReactPageScroller from 'react-page-scroller';

import FirstComponentProducto from "./components/pageProducto/FirstComponentProducto";
import SecondComponentProducto from "./components/pageProducto/SecondComponentProducto";
import ThirdComponentProducto from "./components/pageProducto/ThirdComponentProducto";

export default function Producto() {
  return (
    <Layout>
      <main>
        <ReactPageScroller>
          <FirstComponentProducto />
          <SecondComponentProducto />
          <ThirdComponentProducto />
        </ReactPageScroller>
      </main>
    </Layout>
  )
}
