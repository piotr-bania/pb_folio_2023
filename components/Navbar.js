import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header>
                <Link href="/">
                <Image className='logo' src="/svg/logo.svg" alt="logo" width={60} height={60} />
                </Link>
                <nav>
                    <li>
                        <div className="menu">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/portfolio">Portfolio</Link>
                            <Link href="/lab">Lab</Link>
                            <Link href="/skills">Skills</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </li>
                    <Link href="/public/resume/Piotr_Bania_Resume.pdf"><button className='button'>Resume</button></Link>
                </nav>
            </header>
        </>
    )
}

export default Navbar