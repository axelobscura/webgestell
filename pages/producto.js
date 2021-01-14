import React, { useState } from "react";
import Layout from './components/Layout'
import ReactPageScroller from 'react-page-scroller';

import FirstComponentProducto from "./components/pageProducto/FirstComponentProducto";
import SecondComponentProducto from "./components/pageProducto/SecondComponentProducto";
import ThirdComponentProducto from "./components/pageProducto/ThirdComponentProducto";

export default function Producto() {
  const [count, setCount] = useState(0);

  const handlePageChange = number => {
    setCount(number)
  };
  return (
    <Layout pagina={count}>
      <main>
        <ReactPageScroller
          pageOnChange={handlePageChange}
        >
          <FirstComponentProducto />
          <SecondComponentProducto />
          <ThirdComponentProducto />
        </ReactPageScroller>
      </main>
    </Layout>
  )
}
