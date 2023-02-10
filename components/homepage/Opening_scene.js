import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { gsap } from 'gsap'
import Hero from './Hero'
import Link from 'next/link'

const Opening_scene = () => {



    return (
        <section id="opening">            
            <p className='name'>Piotr Bania</p>
            <p className='role'>Creative web developer</p>
        </section>
    )
}

export default Opening_scene