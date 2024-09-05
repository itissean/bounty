// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://cdn.jsdelivr.net/npm/beercss@3.6.13/dist/cdn/beer.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
            rel="stylesheet"
          />
          {assets}
        </head>
        <body class="dark">
          <div id="app">{children}</div>
          <script
            type="module"
            src="https://cdn.jsdelivr.net/npm/beercss@3.6.13/dist/cdn/beer.min.js"
          />
          {scripts}
        </body>
      </html>
    )}
  />
));
