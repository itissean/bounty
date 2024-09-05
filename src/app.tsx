import { MetaProvider, Title } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';

import TopNav from './components/TopNav';
import Footer from './components/Footer';

import './global.css';

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Bounty</Title>
          <TopNav />
          <Suspense>{props.children}</Suspense>
          <Footer />
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
