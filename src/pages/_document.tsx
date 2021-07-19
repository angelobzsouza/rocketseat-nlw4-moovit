import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="iamge/png"/>
                    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Rajdhani:wght@500&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}