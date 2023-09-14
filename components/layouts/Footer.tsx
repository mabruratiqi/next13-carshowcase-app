import React from 'react'
import Link from 'next/link'
import {footerLinks} from '@/constants'

function Footer() {
  return (
      <div>Footer
          {
              footerLinks.map(item => (
                  <div>
                      {item.title}
                      {item.links.map(node => (
                          <div>
                              {node.title}
                          </div>
                      )
                      )}
                  </div>
              ))
          }
      
      </div>
  )
}

export default Footer