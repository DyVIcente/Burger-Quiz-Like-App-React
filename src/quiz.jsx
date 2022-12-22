import React, { useState } from 'react'
import questions from './questions'
import shuffle from './shuffle'
import './quiz.css'

function QuizApp() {
  // utilisez useState pour gérer l'état de l'application
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)

  // mélange aléatoirement la liste de questions
  shuffle(questions)

  // récupère la question en cours à partir de la liste de questions
  const currentQuestion = questions[currentQuestionIndex]

  // définit une fonction pour vérifier si la réponse sélectionnée est correcte
  const checkAnswer = (selectedOption) => {
    if (selectedOption === currentQuestion.answer) {
      // incrémente le score si la réponse est correcte
      setScore(score + 1)
      // avance à la question suivante
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setCurrentQuestionIndex(0)
      setScore(0)
    }
  }

  return (
    <div>
      <h1>Burger Quiz : Les Nuggets</h1>
      {/* vérifie si l'utilisateur a répondu à toutes les questions */}
      {currentQuestionIndex < questions.length ? (
        <div>
          {/* affiche la question en cours */}
          <h2>{currentQuestion.question}</h2>

          {/* affiche les options de réponse */}
          <div className="btn">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className="btn-solo"
                onClick={() => checkAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="score">
            {/* affiche le score et la question en cours */}
            <p>
              Score: {score} / {questions.length}
            </p>
            <p>
              Question {currentQuestionIndex + 1} / {questions.length}
            </p>
          </div>
        </div>
      ) : (
        <div>
          {/* affiche le score final et le bouton de recommencement */}
          <h2>
            Votre score final est de {score} / {questions.length}
          </h2>
          <button
            onClick={() => {
              setCurrentQuestionIndex(0)
              setScore(0)
            }}
          >
            Recommencer
          </button>
        </div>
      )}
    </div>
  )
}

export default QuizApp
