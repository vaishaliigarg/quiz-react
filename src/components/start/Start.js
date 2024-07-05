import React, { useContext } from 'react';
import DataContext from '../../context/dataContext';
import './start.css'; // Importing the CSS file

const Start = () => {
    const { startQuiz, showStart } = useContext(DataContext);

    return (
        <section className='start-section text-white text-center d-flex align-items-center justify-content-center' style={{ display: `${showStart ? 'flex' : 'none'}`, minHeight: '100vh' }}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4'>Welcome to the Quiz</h1>
                        <p className='mb-4'>Test your knowledge with this quiz </p>
                        <button onClick={startQuiz} className="btn start-btn px-4 py-2 fw-bold">Start Quiz</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;
