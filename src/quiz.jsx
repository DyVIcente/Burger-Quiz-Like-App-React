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
      // si l'utilisateur se trouve sur la première question, recharge la page
      if (currentQuestionIndex === 0) {
        // affiche un message de confirmation avant de faire un fast reload
        if (
          window.confirm(
            'Votre réponse est incorrecte. Voulez-vous recommencer?'
          )
        ) {
          window.location.reload()
        }
      } else {
        setCurrentQuestionIndex(0)
        setScore(0)
      }
    }
  }

  return (
    <main>
      <div className="trait-pain"></div>
      <div className="trait-salade"></div>
      <div className="trait-tomate"></div>
      <h1 className="bgquiz">
        <span className="blue ltr">B</span>
        <span> </span>
        <span className="blue ltr">U</span>
        <span> </span>
        <span className="blue ltr">R</span>
        <span> </span>
        <span className="blue ltr">G</span>
        <span> </span>
        <span className="blue ltr">E</span>
        <span> </span>
        <span className="blue ltr">R</span>
        <span> </span>
        <span> </span>
        <span className="red ltr">Q</span>
        <span> </span>
        <span className="yellow ltr">U</span>
        <span> </span>
        <span className="red ltri">I</span>
        <span> </span>
        <span className="yellow ltr">Z</span>
      </h1>
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
      <div className="trait-tomate down"></div>
      <div className="trait-salade"></div>
      <div className="trait-pain"></div>
    </main>
  )
}

export default QuizApp
