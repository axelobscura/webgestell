import React, { useState } from "react";
import Layout from './components/Layout'
import ReactPageScroller from 'react-page-scroller';

import FirstComponentHarpe from "./components/pageHarpe/FirstComponentHarpe";
import SecondComponentHarpe from "./components/pageHarpe/SecondComponentHarpe";
import ThirdComponentHarpe from "./components/pageHarpe/ThirdComponentHarpe";

export default function Harpe() {
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
          <FirstComponentHarpe />
          <SecondComponentHarpe />
          <ThirdComponentHarpe />
        </ReactPageScroller>
      </main>
    </Layout>
  )
}
