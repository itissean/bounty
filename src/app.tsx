import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import { useAssets } from "solid-js/web";

import { StyleRegistry, css, renderSheets, type StyleData } from "solid-styled";

import TopNav from './components/TopNav';
import Footer from './components/Footer';

import './global.css';

export default function App() {
  const sheets: StyleData[] = [];
  useAssets(() => renderSheets(sheets));

  return (
    <Router
      root={props => (
        <MetaProvider>
          <StyleRegistry styles={sheets}>
            <Title>Bounty</Title>
            <TopNav />
            <Suspense>{props.children}</Suspense>
            <Footer />
          </StyleRegistry>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
