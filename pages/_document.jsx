import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <title> Text Portrait Generator by Eric Echemane </title>
                    <meta name='keywords' content='css, portrait, css portrait, css image portrait, css text portrait image download, eric echemane' />
                    <link rel="author" href="https://github.com/EricEchemane/CSS-Text-Portrait-Generator" />
                    <script src='https://cdn.jsdelivr.net/npm/html2canvas@1.3.3/dist/html2canvas.min.js'></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;