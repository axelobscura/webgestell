import React, { useState } from "react";
import Layout from './components/Layout'
import ReactPageScroller from 'react-page-scroller';

import FirstComponentNosotros from "./components/nosotros/FirstComponentNosotros";
import SecondComponentNosotros from "./components/nosotros/SecondComponentNosotros";

export default function Nosotros() {
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
          <FirstComponentNosotros />
          <SecondComponentNosotros />
        </ReactPageScroller>
      </main>
    </Layout>
  )
}
