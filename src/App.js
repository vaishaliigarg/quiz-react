import React, { useContext } from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';
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
