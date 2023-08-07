import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

export default function About() {
    return (
        <>
            <Navbar />
            <div className='pb-20 p-5'>
                <h1 className='text-2xl'>About Section</h1>
                <p>This is the About section</p>
            </div>
            <Footer />
        </>
    )
}
