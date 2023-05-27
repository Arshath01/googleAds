import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({});
            `,
          }}
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8899226802497324"
          crossOrigin="anonymous"
        ></script>
        <div>
          {/* First Ad */}
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-8899226802497324"
            data-ad-slot="7857658078"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
