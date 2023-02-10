import React from "react"
import { AnimatePresence, motion as m } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
    return (
        <AnimatePresence>
            <section
                id="hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                >

                <m.h1
                    className="heading"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 8, duration: 2, ease: 'easeInOut'} }}
                    >Transforming <br /> the digital universe through code and creativity</m.h1>
                
                <m.h3
                    className="subheading"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 9, duration: 2, ease: 'easeInOut'} }}
                    >Fusing technology and imagination to create something truly unique</m.h3>
                
                <m.div
                    className="cta"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 9.5, duration: 2, ease: 'easeInOut'} }}
                    >
                    <Link href='#projects'><button>View my latest missions</button></Link>
                </m.div>
            </section>
        </AnimatePresence>
    )
}

export default Hero