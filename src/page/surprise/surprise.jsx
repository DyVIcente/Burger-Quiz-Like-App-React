import React from 'react'
import Loutre from '../../assets/loutre-de-mer.jpg'
import './surprise.css'
import Btn from '../../components/btn/button'

function Surprise() {
  return (
    <main className="loutre">
      <div className="trait-pain"></div>
      <div className="trait-salade"></div>
      <div className="trait-tomate"></div>
      <p className="txt-loutre">
        En surprise la photo d'une loutre trop choupiiiiii <br />
        Non mais regardez moi ça! <br />
        Adorable!
      </p>
      <div className="img-loutre">
        <img src={Loutre} alt="" className="imgimg" />
      </div>
      <Btn />
      <div className="trait-tomate down"></div>
      <div className="trait-salade"></div>
      <div className="trait-pain"></div>
    </main>
  )
}

export default Surprise
