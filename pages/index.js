import React, { useState } from "react";
import Layout from './components/Layout'
import ReactPageScroller from 'react-page-scroller';

import FirstComponent from "./components/pageOne/FirstComponent";
import SecondComponent from "./components/pageOne/SecondComponent";
import ThirdComponent from "./components/pageOne/ThirdComponent";
import FourthComponent from "./components/pageOne/FourthComponent";
import FifthComponent from "./components/pageOne/FifthComponent";

export default function Home() {

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
          <FirstComponent />
          <SecondComponent />
          <ThirdComponent />
          <FourthComponent />
          <FifthComponent />
        </ReactPageScroller>
      </main>
    </Layout>
  )
}
