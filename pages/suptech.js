import React from "react";
import Layout from './components/Layout'
import ReactPageScroller from 'react-page-scroller';

import FirstComponentSuptech from "./components/pageSuptech/FirstComponentSuptech";
import SecondComponentSuptech from "./components/pageSuptech/SecondComponentSuptech";
import ThirdComponentSuptech from "./components/pageSuptech/ThirdComponentSuptech";

export default function Suptech() {
  return (
    <Layout>
      <main>
        <ReactPageScroller>
          <FirstComponentSuptech />
          <SecondComponentSuptech />
          <ThirdComponentSuptech />
        </ReactPageScroller>
      </main>
    </Layout>
  )
}
