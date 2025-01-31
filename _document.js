// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-L0TL7FT4YS"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-L0TL7FT4YS');
            `,
                    }}
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
