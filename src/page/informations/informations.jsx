import './informations.css'
import Btn from '../../components/btn/button'

function Info() {
  return (
    <main className="main-info">
      <div className="trait-pain"></div>
      <div className="trait-salade"></div>
      <div className="trait-tomate"></div>
      <p className="txt-legal">
        Bienvenue dans cette application d'entraînement et d'étude ! <br /> Nous
        espérons que vous apprécierez ce petit quiz qui vous permettra de vous
        divertir tout en faisant travailler votre cerveau. N'oubliez pas que
        tous les moyens sont bons pour devenir un génie (ou presque). Si vous
        avez des problèmes de mémoire, nous vous conseillons de manger plus de
        poisson (ou de nuggets, c'est selon vos préférences). Et surtout,
        n'oubliez pas que la connaissance est le vrai trésor, alors continuez à
        apprendre !<br /> Cette application a été créée uniquement à des fins
        d'entraînement et d'étude. Toute ressemblance avec des personnes ou des
        événements réels serait purement fortuite et ne saurait engager notre
        responsabilité.
      </p>
      <Btn />
      <div className="trait-tomate down"></div>
      <div className="trait-salade"></div>
      <div className="trait-pain"></div>
    </main>
  )
}

export default Info
