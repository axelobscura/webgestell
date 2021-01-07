import React from "react";
import Layout from './components/Layout'
import ReactPageScroller from 'react-page-scroller';

import FirstComponentNosotros from "./components/nosotros/FirstComponentNosotros";
import SecondComponentNosotros from "./components/nosotros/SecondComponentNosotros";

export default function Nosotros() {
  return (
    <Layout>
      <main>
        <ReactPageScroller>
          <FirstComponentNosotros />
          <SecondComponentNosotros />
        </ReactPageScroller>
      </main>
    </Layout>
  )
}
