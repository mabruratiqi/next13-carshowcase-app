'use client'
import React, { useState } from 'react'

import { SearchManufacturer } from '@/components'

function SearchBar() {
    
    const [manufacturer, SetManufacturer] = useState('');

    const handleSearch = () => {
    }

  return (
    <div>
      <strong>Search Bar</strong>
      <h2>form</h2>
      <form onSubmit={handleSearch}>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={SetManufacturer}
        />
      </form>
    </div>
  );
}

export default SearchBar