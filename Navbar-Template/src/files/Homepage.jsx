import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

export default function Homepage() {
    return (
        <>
            <Navbar />
            <div className='pb-20 p-5'>
                <h1 className='text-2xl'>Home Section</h1>
                <p>This is the Home section</p>
            </div>
            <Footer />
        </>
    )
}
