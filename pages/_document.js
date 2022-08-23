import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return ( 
    <Html>
      <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robot" content="follow, index" />
      <meta name="description" content="React user list" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="react, list, favorites" />
      <meta name="author" content="Thor-Erik" />
      </Head>
      <body>
        <NextScript />
        <Main />
      </body>
    </Html>
   );
}
 
export default Document;