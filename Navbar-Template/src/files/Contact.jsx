import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className='pb-20 p-5'>
                <h1 className='text-2xl'>Contact Section</h1>
                <p>This is the Contact section</p>
            </div>
            <Footer />
        </>
    )
}