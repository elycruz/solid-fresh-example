import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>solid-fresh-example</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header className="x-app-bar">
          <div className="h-limit-wrapper">
            <hgroup>
              <h1>Solid + Fresh Examples</h1>
            </hgroup>
          </div>
        </header>
        <Component />
        <footer>
          <div className="h-limit-wrapper">
            <p>&copy; elycruz 2023</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
