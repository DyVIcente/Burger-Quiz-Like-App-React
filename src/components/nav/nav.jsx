import './nav.css'
import { useState } from 'react'

function Nav() {
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    //on va editer la valeur uniquement si le showlinks est dif de false
    setShowLinks(!showLinks)
  }

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : ''} `}>
      <ul className="navbar__links">
        <li className="navbar__item slideDown-1">
          <a href="/informations" className="navbar__link">
            Informations Légales
          </a>
        </li>
        <li className="navbar__item slideDown-2">
          <a href="/surprise" className="navbar__link">
            Surprise
          </a>
        </li>
        <li className="navbar__item slideDown-3">
          <a href="/" className="navbar__link">
            Retour à la question 1
          </a>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar">&#127828; menu</span>
      </button>
    </nav>
  )
}

export default Nav
