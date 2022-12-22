import './App.css'
import QuizApp from './page/quiz/quiz'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Surprise from './page/surprise/surprise'
import Info from './page/informations/informations'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<QuizApp />} />
          <Route path="/informations" element={<Info />} />
          <Route path="/surprise" element={<Surprise />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
