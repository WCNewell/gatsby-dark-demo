import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import useDarkMode from "use-dark-mode"

import SunIcon from "../assets/sun.inline.svg"
import MoonIcon from "../assets/moon.inline.svg"

const Header = ({ siteTitle }) => {
  const darkMode = useDarkMode(false)

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          <SunIcon  className="mode-icon"
                    onClick={() => {
                        darkMode.disable()
                    }}
                    alt='sun icon for light mode'
          />
        </div>
        <div>
          <MoonIcon className="mode-icon" 
                    onClick={() => {
                        darkMode.enable()
                    }}
                    alt='moon icon for dark mode'
          />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
