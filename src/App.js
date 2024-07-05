import React, { useContext } from 'react';
import Start from './components/start/Start';
import Quiz from './components/quiz/Quiz';
import Result from './components/result/Result';
import DataContext, { DataProvider } from './context/dataContext';

const App = () => {
    const { showStart, showQuiz, showResult } = useContext(DataContext);

    return (
        <div className="App">
            {showStart && <Start />}
            {showQuiz && <Quiz />}
            {showResult && <Result />}
        </div>
    );
}

const AppWrapper = () => (
    <DataProvider>
        <App />
    </DataProvider>
);

export default AppWrapper;
