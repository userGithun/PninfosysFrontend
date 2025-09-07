import Link from 'next/link';
import React, { useState } from 'react'
import { useGetAllCollegeQuery } from '../../redux/features/workshop/workshopApi';
import PnLogo from '/public/image/pninfosysLogo.png'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const { data: workshop = [], isLoading } = useGetAllCollegeQuery()

  return (
    <header className="bg-gray-50 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={PnLogo.src}
            alt="PN INFOSYS"
            className="w-[64%] md:w-[74%]"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex text-black space-x-6 items-center font-semibold text-sm md:text-base">
          <Link href='/' onClick={closeMenu}>HOME</Link>
          <Link href='/about' onClick={closeMenu}>ABOUT</Link>
          <Link href="/servicess" onClick={closeMenu}>SERVICE</Link>
          <Link href="/training" onClick={closeMenu}>TRAINING</Link>

          {/* WORKSHOP Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1">
              WORKSHOP <span className="text-xs">▼</span>
            </button>
            <div
              className="absolute left-0 top-full bg-white shadow-lg mt-1 rounded w-52 z-10 
              max-h-0 overflow-hidden opacity-0 
              transition-all duration-300 ease-in-out 
              group-hover:max-h-96 group-hover:opacity-100"
            >
              {workshop.slice().reverse().map((item) => (
                <Link
                  key={item._id}
                  href={`/workshop/${item.slug}`}
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  {item.collegename}
                </Link>
              ))}
            </div>
          </div>

          {/* PLACEMENT Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1">
              PLACEMENT <span className="text-xs">▼</span>
            </button>
            <div
              className="absolute left-0 top-full bg-white shadow-lg mt-1 rounded w-40 z-10 
              max-h-0 overflow-hidden opacity-0 
              transition-all duration-300 ease-in-out 
              group-hover:max-h-40 group-hover:opacity-100"
            >
              <Link href="/placement/placeDesk" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMenu}>
                Placement Desk
              </Link>
              <Link href="/placement/placeGallery" className="block px-3 py-2 hover:bg-gray-100" onClick={closeMenu}>
                Placement Gallery
              </Link>
            </div>
          </div>

          {/* EVENTS Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1">
              EVENTS <span className="text-xs">▼</span>
            </button>
            <div
              className="absolute left-0 top-full text-center bg-white shadow-lg mt-1 rounded w-58 z-10 
              max-h-0 overflow-hidden opacity-0 
              transition-all duration-300 ease-in-out 
              group-hover:max-h-60 group-hover:opacity-100"
            >
              <Link href="/event/birthday" className="block px-2 py-2 hover:bg-gray-100" onClick={closeMenu}>Student's Birthday</Link>
              <Link href="/event/anniversary" className="block px-2 py-2 hover:bg-gray-100" onClick={closeMenu}>Anniversary Celebration</Link>
              <Link href="/event/tour" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMenu}>TOURS</Link>
            </div>
          </div>

          <Link href="/contact" onClick={closeMenu}>CONTACT</Link>
          <Link
            href="/internship"
            className="border border-blue-400 text-gray-800 px-3 py-1 rounded hover:bg-blue-50"
          >
            INTERNSHIP
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu with smooth animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
          ${mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 pb-4 space-y-3 font-semibold text-sm text-center">
          <Link href='/' className='block' onClick={closeMenu}>HOME</Link>
          <Link href='/about' className='block' onClick={closeMenu}>ABOUT</Link>
          <Link href="/servicess" className='block' onClick={closeMenu}>SERVICE</Link>
          <Link href="/training" className='block' onClick={closeMenu}>TRAINING</Link>
          <Link href="/course" className='block' onClick={closeMenu}>COURSE</Link>

          {/* WORKSHOP */}
          <div>
            <button onClick={() => toggleDropdown('WORKSHOP')} className="w-full">
              WORKSHOP <span className="text-xs">▼</span>
            </button>
            {openDropdown === 'WORKSHOP' && (
              <div className="space-y-1 mt-1 transition-all duration-300 ease-in-out">
                {workshop.slice().reverse().map((item) => (
                    <Link
                      key={item._id}
                      href={`/workshop/${item.slug}`}
                      className="block"
                      onClick={closeMenu}
                    >
                      {item.collegename}
                    </Link>
                  ))}
              </div>
            )}

          </div>

          {/* PLACEMENT */}
          <div>
            <button onClick={() => toggleDropdown('PLACEMENT')} className="w-full">
              PLACEMENT <span className="text-xs">▼</span>
            </button>
            {openDropdown === 'PLACEMENT' && (
              <div className="space-y-1 mt-1 transition-all duration-300 ease-in-out">
                <Link href="/placement/placeDesk" className="block" onClick={closeMenu}>Placement Desk</Link>
                <Link href="/placement/placeGallery" className="block" onClick={closeMenu}>Placement Gallery</Link>
              </div>
            )}
          </div>

          {/* EVENTS */}
          <div>
            <button onClick={() => toggleDropdown('EVENTS')} className="w-full">
              EVENTS <span className="text-xs">▼</span>
            </button>
            {openDropdown === 'EVENTS' && (
              <div className="space-y-1 mt-1 transition-all duration-300 ease-in-out">
                <Link href="/event/birthday" className="block" onClick={closeMenu}>Student's Birthday</Link>
                <Link href="/event/anniversary" className="block" onClick={closeMenu}>Anniversary Celebration</Link>
                <Link href="/event/tour" className="block" onClick={closeMenu}>TOURS</Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="block" onClick={closeMenu}>CONTACT</Link>
          <Link
            href="/internship"
            className="inline-block border text-gray-900 border-blue-400 px-3 py-1 rounded mt-2"
          >
            INTERNSHIP
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
