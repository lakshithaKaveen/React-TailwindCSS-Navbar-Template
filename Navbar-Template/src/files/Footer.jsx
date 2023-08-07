import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-3 fixed bottom-0 left-0 right-0 mt-100">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} This is Footer</p>
            </div>
        </footer>
    );
};

export default Footer;