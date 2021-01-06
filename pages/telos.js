import React from "react";
import Layout from './components/Layout'
import ReactPageScroller from 'react-page-scroller';

import FirstComponent from "./components/pageTelos/FirstComponent";

export default function Telos() {
  return (
    <Layout>
      <main>
        <ReactPageScroller>
          <FirstComponent />
        </ReactPageScroller>
      </main>
    </Layout>
  )
}
