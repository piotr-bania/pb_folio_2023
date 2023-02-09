import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { gsap } from 'gsap'
import Hero from './Hero'
import Link from 'next/link'

const Opening_scene = () => {

    // useEffect(() => {
    //     const t1 = gsap.timeline()
    //     gsap.fromTo("p",
    //     {opacity: 0},
    //     {opacity: 1, duration: 2, delay: 2, stagger: 3,
    //         onComplete: function () {
    //             const t2 = gsap.timeline()
    //             gsap.fromTo("p",
    //             {opacity: 1},
    //             {opacity: 0, duration: 1, delay: 1,
    //                 onComplete: function () {
    //                     const t3 = gsap.timeline()
    //                     gsap.fromTo(".heading, .subheading",
    //                     {opacity: 0},
    //                     {opacity: 1, duration: 2, delay: 1, stagger: 2})
    //                 }
    //             })
    //         }
    //     })
    // })

    useEffect(() => {
        const timelines = []

        const t1 = gsap.timeline()
        timelines.push(t1)
        t1.fromTo("p",
            {opacity: 0},
            {opacity: 1, duration: 1.5, delay: 2, stagger: 2,
                onComplete: function() {
                    const t2 = gsap.timeline()
                    timelines.push(t2)
                    t2.fromTo("p",
                        {opacity: 1},
                        {opacity: 0, duration: 1.5, delay: 1.5
                    })
                }
        })
    })

    return (
        <div className='opening'>
            <p className='name'>Piotr Bania</p>
            <p className='role'>Creative web developer</p>
        </div>
    )
}

export default Opening_scene