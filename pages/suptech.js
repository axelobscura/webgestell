import React, { useState } from "react";
import Layout from './components/Layout'
import ReactPageScroller from 'react-page-scroller';

import FirstComponentSuptech from "./components/pageSuptech/FirstComponentSuptech";
import SecondComponentSuptech from "./components/pageSuptech/SecondComponentSuptech";
import ThirdComponentSuptech from "./components/pageSuptech/ThirdComponentSuptech";

export default function Suptech() {
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
          <FirstComponentSuptech />
          <SecondComponentSuptech />
          <ThirdComponentSuptech />
        </ReactPageScroller>
      </main>
    </Layout>
  )
}
