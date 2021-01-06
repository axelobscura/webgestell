import React from "react";
import Layout from './components/Layout'
import ReactPageScroller from 'react-page-scroller';

import FirstComponentTelos from "./components/pageTelos/FirstComponentTelos";
import SecondComponentTelos from "./components/pageTelos/SecondComponentTelos";

export default function Telos() {
  return (
    <Layout>
      <main>
        <ReactPageScroller>
          <FirstComponentTelos />
          <SecondComponentTelos />
        </ReactPageScroller>
      </main>
    </Layout>
  )
}
