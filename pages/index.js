import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
    return (
        <>

            <Head>
                <title>Piotr | Portfolio</title>
                <meta name="description" content="Piotr | Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo/logo.svg" />
            </Head>

            <main>
                <section>
                    <h1>This is Homepage</h1>
                </section>
            </main>
        </>
    )
}