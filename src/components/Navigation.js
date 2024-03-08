import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Navigation = () => {
    const { site: { siteMetadata: { menuLinks } } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  return (
    <div className='hidden lg:block'>
        <nav >
            <ul className='flex flex-row gap-3' >
                {menuLinks.map(link => (
                    <li key={link.name}>
                    <Link to={link.link}>
                        {link.name}
                    </Link>
                    </li>
                ))}
            </ul>
        </nav>
              
    </div>
  )
}

export default Navigation
