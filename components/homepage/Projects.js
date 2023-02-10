import React from 'react'
import Link from 'next/link'

const Projects = () => {
    return (
        <section id='projects'>
            <div className="header">
                <h1>Portfolio</h1>
                <h2>Featured projects</h2>
            </div>

            <div className="project p1" id='p1'>
            <h3>Nursing Home Landing Page</h3>
                <p>Clone of the landing page from the Elegant Themes template</p>
                <h4>HTML | Sass | Css Grid</h4>
            </div>
            <div className="project_wrapper">
                <div className="image i1"></div>
                <div className='links'>
                    <Link href="http://retirement-center.space" target="_blank">View Live</Link>
                    <Link href="https://github.com/piotr-bania/Nursing_Home_Webapp" target="_blank">GitHub</Link>
                </div>
            </div>
        </section>
    )
}

export default Projects