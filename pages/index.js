import Head from 'next/head'
import { motion as m } from 'framer-motion'
import React, { Suspense } from 'react'

import Hero from '../components/homepage/Hero'
import Opening_scene from '../components/homepage/Opening_scene'
import Menu from '../components/homepage/Menu'

export default function Home() {
    return (
        <>
            <Head>
                <title>Piotr | Portfolio</title>
                <meta name="description" content="Piotr | Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo/logo.svg" />
            </Head>

            <m.main
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{
                    duration: 2,
                    ease: 'easeInOut',
                    delay: 0.25
                }}
            >                
                <Opening_scene />
                <Hero />
                {/* <Menu /> */}
            </m.main>
        </>
    )
}