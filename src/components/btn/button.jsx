import './button.css'
import { Link } from 'react-router-dom'

function Btn() {
  return (
    <div className="div-btn">
      <Link to="/">
        <button className="btn-retour">Retour au jeu</button>
      </Link>
    </div>
  )
}

export default Btn
