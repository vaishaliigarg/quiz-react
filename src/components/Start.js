import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Start = () => {
    const { startQuiz, showStart } = useContext(DataContext);

    return (
        <section className='text-white text-center bg-dark d-flex align-items-center justify-content-center' style={{ display: `${showStart ? 'flex' : 'none'}`, minHeight: '100vh' }}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4'>Welcome to the Quiz</h1>
                        <p className='mb-4'>Test your knowledge with this quiz </p>
                        <button onClick={startQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold">Start Quiz</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;
