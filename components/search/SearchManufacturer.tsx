'use client'
import { Combobox, Transition } from '@headlessui/react';
import { ManufacturerProps } from '@/types';
import React from 'react'

function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: ManufacturerProps) {
    return <div>
        <h1>combobox</h1>
        <Combobox>
            <div className="relative w-full">
                dsfdsfd
            </div>
        </Combobox>
    </div>;
}

export default SearchManufacturer