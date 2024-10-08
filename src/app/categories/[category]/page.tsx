'use client'

import Answer from "@/components/Answer";
import CorrectAnswer from "@/components/CorrectAnswer";
import NextButton from "@/components/NextButton";
import Question from "@/components/Question";
import WrongAnswer from "@/components/WrongAnswer";

import { questions } from "@/data";

import React, { BaseSyntheticEvent, use, useEffect, useState } from "react";
import NotFound from "../../not-found";
import Link from "next/link";

type categoryParams = {
  category: string
}

export default function Home({ params }: { params: categoryParams }) {
  const validCategories = ["movies", "television", "videogames", "sport", "history", "animals"]

  const [questionAnswered, setQuestionAnswered] = useState(false)
  const [guessedCorrect, setGuessedCorrect] = useState(false)
  const [guessedAnswer, setGuessedAnswer] = useState("answer")
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "question",
    correctAnswer: "answer",
    otherAnswers: ["answer1", "answer2", "answer3"]
  })

  const [currentAnswers, setCurrentAnswers] = useState([" ", " ", " ", " "])

  const [questionNumber, setQuestionNumber] = useState(0)
  const [quizEnded, setQuizEnded] = useState(false)
  const [score, setScore] = useState(0)

  let filteredQuestions = questions.filter((question) => {
    return question.category === params.category
  })

  // get current question
  useEffect(() => {
    setCurrentQuestion(filteredQuestions[questionNumber])
  }, [questionNumber])

  // randomise order of answers
  useEffect(() => {
    let randomiseAnswers = [currentQuestion.correctAnswer, ...currentQuestion.otherAnswers].sort(() => 0.5 - Math.random());
    setCurrentAnswers(randomiseAnswers.slice(0, 4));
  }, [currentQuestion]);

  let currentCorrectAnswer = currentQuestion.correctAnswer

  // handle re-render for neq questions
  useEffect(() => {
    if (questionNumber) {
      setCurrentQuestion(filteredQuestions[questionNumber])

      setQuestionAnswered(false)
      setGuessedCorrect(false)
      setGuessedAnswer("answer")
    }
  }, [questionNumber])

  const checkAnswer = (e: BaseSyntheticEvent) => {
    let currentGuess = e.target.textContent

    setGuessedAnswer(currentGuess)

    if (e.target.textContent === currentQuestion.correctAnswer) {
      setQuestionAnswered(true)
      setGuessedCorrect(true)
      setScore(score + 1)
    }
    else {
      setQuestionAnswered(true)
    }
  }

  if (!validCategories.includes(params.category)) {
    return NotFound()
  }

  return (
    <main className="md:mt-10 h-[100vh]">
      <div className="w-fit mx-auto md:mt-20">
        <span className="font-bold uppercase tracking-tighter">Question {questionNumber + 1}/{filteredQuestions.length}</span>
        <Question questionText={currentQuestion.question} />
      </div>
      <div className="w-fit mx-auto mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {!questionAnswered
          // if question is not answered
          ? currentAnswers.map((answer, i) => <Answer key={`${answer}${i}`} answerText={answer} handleClick={checkAnswer} />)
          // else if it is answered
          : currentAnswers.map((answer, i) =>
            answer === currentCorrectAnswer
              // display the correct answer to the user
              ? <CorrectAnswer key={`${answer}${i}`} answerText={answer} />
              // if user selected the wrong answer
              : answer === guessedAnswer && guessedAnswer != currentCorrectAnswer
                // feedback to player that answer is wrong
                ? <WrongAnswer key={`${answer}${i}`} answerText={answer} />
                // print rest of the answers
                : <Answer key={`${answer}${i}`} answerText={answer} />
          )}
      </div>
      {guessedCorrect && questionAnswered
        ? <div className="w-fit mx-auto mt-2 p-2 text-center text-lg md:text-2xl font-bold"><span>Yep! That&apos;s correct</span></div>
        : questionAnswered && <div className="w-fit mx-auto mt-2 p-2 text-center text-lg md:text-2xl font-bold"><span>Wrong! The correct answer was {currentCorrectAnswer}</span></div>
      }
      {questionAnswered && !quizEnded && <NextButton handleClick={() => {
        if (questionNumber < filteredQuestions.length - 1) {
          setQuestionNumber(questionNumber + 1)
        }
        else {
          setQuizEnded(true)
        }
      }} />}
      {quizEnded &&
        <div className="w-fit mx-auto px-4 text-center flex flex-col md:gap-4 text-2xl font-bold">
          <span className="text-xl md:text-2xl">That&apos;s the Quiz! You got {Math.round(score / filteredQuestions.length * 100)}% correct</span>
          <Link href="/categories" className="px-6 py-1 mt-2 rounded-full border-green-400 border-4 bg-green-300">Play Again</Link>
        </div>
      }
    </main>
  );
}
