import Link from 'next/link'

const Hero = () => {
    return (
        <section id="hero">            
            <div className="wrapper">
                <h1 className="heading">Transforming <br /> the digital universe through code and creativity</h1>
                <h3 className="subheading">Fusing technology and imagination to create something truly unique</h3>
                <div className="cta">
                    <Link href='#projects'><button>View my latest missions</button></Link>
                </div>
            </div>
        </section>
    )
}

export default Hero