import React from "react";
import Layout from './components/Layout'
import ReactPageScroller from 'react-page-scroller';

import FirstComponentHarpe from "./components/pageHarpe/FirstComponentHarpe";
import SecondComponentHarpe from "./components/pageHarpe/SecondComponentHarpe";
import ThirdComponentHarpe from "./components/pageHarpe/ThirdComponentHarpe";

export default function Harpe() {
  return (
    <Layout>
      <main>
        <ReactPageScroller>
          <FirstComponentHarpe />
          <SecondComponentHarpe />
          <ThirdComponentHarpe />
        </ReactPageScroller>
      </main>
    </Layout>
  )
}
