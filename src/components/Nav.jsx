import { useState } from 'react';
function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex flex-wrap justify-between items-center p-4 md:p-[28px] font-inter">
            
            <div className="ml-4 md:ml-[80px]">
                <h1 className="text-xl md:text-2xl font-bold">YOURLOGO</h1>
            </div>

            <button 
                className="md:hidden mr-4 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>

            <ul className="hidden md:flex gap-6 lg:gap-[50px]">
                {['ABOUT', 'TOUR', 'PACKAGE', 'CONTACT'].map((item) => (
                    <li key={item}>
                        <a 
                            href="#" 
                            className="
                                text-[#333] font-medium tracking-wide relative py-1.5 no-underline 
                                before:content-[''] before:absolute before:bottom-0 before:left-0
                                before:h-[1px] before:w-0 before:bg-[#474747] before:rounded-full 
                                before:transition-all before:duration-300 before:ease-in-out 
                                hover:before:w-full
                            "
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <button className="hidden md:block border border-black bg-black text-white px-6 py-1.5 md:px-8 md:py-2 rounded-3xl cursor-pointer mr-4 md:mr-[80px] hover:bg-white hover:text-black transition-all duration-300">
                Book Trip
            </button>

            {isMenuOpen && (
                <div className="w-full md:hidden mt-4">
                    <ul className="flex flex-col gap-4">
                        {['ABOUT', 'TOUR', 'PACKAGE', 'CONTACT'].map((item) => (
                            <li key={item}>
                                <a 
                                    href="#" 
                                    className="
                                        block text-[#333] font-medium py-2 px-4
                                        border-b border-gray-100
                                    "
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                        <li>
                            <button className="w-full border border-black bg-black text-white px-6 py-2 rounded-3xl cursor-pointer hover:bg-white hover:text-black transition-all duration-300 mt-2">
                                Book Trip
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Nav;