import React from "react";
import Layout from './components/Layout'
import ReactPageScroller from 'react-page-scroller';

import FirstComponent from "./components/pageOne/FirstComponent";
import SecondComponent from "./components/pageOne/SecondComponent";
import ThirdComponent from "./components/pageOne/ThirdComponent";
import FourthComponent from "./components/pageOne/FourthComponent";
import FifthComponent from "./components/pageOne/FifthComponent";

export default function Home() {
  return (
    <Layout>
      <main>
        <ReactPageScroller>
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
