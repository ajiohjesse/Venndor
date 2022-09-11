import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const setInitialTheme = `
       function getUserPreference() {
         if(window.localStorage.getItem('venndor-theme')) {
           return window.localStorage.getItem('venndor-theme')
         }
         return window.matchMedia('(prefers-color-scheme: dark)').matches
                   ? 'dark'
                   : 'light'
       }
       document.body.dataset.theme = getUserPreference()
     `;

    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
