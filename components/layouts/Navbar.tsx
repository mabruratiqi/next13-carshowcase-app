import React from 'react'
import Link from 'next/link';

function Navbar() {
  return (
      <header>
          <nav className='item-center justify-between'>
              <Link href="/" >
                logo here
              </Link>
          </nav>
      </header>
  )
}

export default Navbar