import React, { useState, useEffect } from "react";
import { AnimatePresence, motion as m } from 'framer-motion'

const Opening_scene = () => {

    const [show, setShow] = useState(true)

    useEffect(() => {
    setTimeout(() => setShow(false), 7000)
    }, [])

    return (
        <AnimatePresence>
            {show && (
                <m.section
                    id="opening"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                    
                    <m.p
                        className="name"
                        initial={{opacity: 0}}
                        animate={{ opacity: 1, transition: {delay: 2, duration: 2, ease: 'easeInOut'} }}
                    >Piotr Bania</m.p>
                    
                    <m.p
                        className="role"
                        initial={{opacity: 0}}
                        animate={{ opacity: 1, transition: {delay: 4, duration: 2, ease: 'easeInOut'} }}
                    >Creative web developer</m.p>
                </m.section>
            )}
        </AnimatePresence>
    )
}

export default Opening_scene