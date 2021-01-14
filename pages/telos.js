import React, { useState } from "react";
import Layout from './components/Layout'
import ReactPageScroller from 'react-page-scroller';

import FirstComponentTelos from "./components/pageTelos/FirstComponentTelos";
import SecondComponentTelos from "./components/pageTelos/SecondComponentTelos";
import ThirdComponentTelos from "./components/pageTelos/ThirdComponentTelos";

export default function Telos() {
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
          <FirstComponentTelos />
          <SecondComponentTelos />
          <ThirdComponentTelos />
        </ReactPageScroller>
      </main>
    </Layout>
  )
}
