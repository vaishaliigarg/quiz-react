import React, { useContext } from 'react';
import DataContext from '../../context/dataContext';
import './quiz.css'; // Importing the CSS file

const Quiz = () => {
  const {
    showQuiz, question, quizs, checkAnswer, correctAnswer, selectedAnswer,
    questionIndex, nextQuestion, showTheResult, reviewMode, userAnswers, backToResults
  } = useContext(DataContext);

  return (
    <section className="quiz-section text-white" style={{ display: `${showQuiz ? 'block' : 'none'}`, minHeight: '100vh' }}>
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="card p-4 quiz-card">
              <div className="d-flex justify-content-between gap-md-3">
                <h5 className='mb-2 fs-normal lh-base'>{question?.question}</h5>
                <h5 className="question-counter">{quizs.indexOf(question) + 1} / {quizs?.length}</h5>
              </div>
              <div>
                {
                  question?.options?.map((item, index) => (
                    <button
                      key={index}
                      className={`option w-100 text-start btn text-dark py-2 px-3 mt-3 rounded btn-dark ${correctAnswer === item && 'bg-success'}`}
                      onClick={(event) => checkAnswer(event, item)}
                      disabled={reviewMode}
                    >
                      {item}
                    </button>
                  ))
                }
              </div>

              {
                (questionIndex + 1) !== quizs.length ?
                  <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={nextQuestion} disabled={!selectedAnswer && !reviewMode}>Next Question</button>
                  :
                  <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={reviewMode ? backToResults : showTheResult} disabled={!selectedAnswer && !reviewMode}>{reviewMode ? 'Back to Results' : 'Show Result'}</button>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
