import React, { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const navLinks = document.getElementById('nav-links');
        const authLinks = document.getElementById('auth-links');

        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
            authLinks.classList.toggle('hidden');
        });
    }, []);

    return (
        <div className="width-50">
            <div className="border-b border-black container mx-auto flex flex-wrap md:flex-no-wrap justify-between items-center font-small">
                <div className="border-r-2 border-black h-full flex flex-no-wrap items-center text-green-800 text-small:text-xl sm font-bold p-1 sm:p-5">TalentGem</div>

                <button className="block sm:hidden px-2 py-1 border border-green-800 rounded text-green-800" id="mobile-menu-toggle">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                <div className="hidden sm:flex flex-row sm:flex-row flex-wrap justify-center md:justify-start md:flex-no-wrap" id="nav-links">
                    <a href="#" className="text-black mr-1 sm:mr-8 md:ml-0 md:my-0 my-2">For Companies</a>
                    <a href="#" className="text-black mr-1 sm:mr-10 md:my-0 my-2">For Talents</a>
                </div>

                <div className="hidden sm:flex flex-no-wrap sm:ml-auto ml-1" id="auth-links">
                    <a href="#" className="text-black mr-1 sm:mr-8 md:my-0 my-2">Sign In</a>
                    <a href="#" className="text-green-800 font-bold my-2">Get Started</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
