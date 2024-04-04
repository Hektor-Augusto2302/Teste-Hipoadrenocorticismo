import React, { useState } from 'react';
import './QuestionForm.css';

const QuestionForm = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [advice, setAdvice] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const symptoms = [
        { name: 'letargia', label: 'Letargia' },
        { name: 'vomito', label: 'Vômito' },
        { name: 'fraqueza', label: 'Fraqueza' },
        { name: 'tremores', label: 'Tremores' },
        { name: 'poliuria', label: 'Poliúria' },
        { name: 'polidipsia', label: 'Polidipsia' },
        { name: 'perdaDePeso', label: 'Perda de Peso' },
        { name: 'diarreia', label: 'Diarreia' },
    ];

    const handleAnswerClick = (answer) => {
        setAnswers({ ...answers, [symptoms[currentQuestion].name]: answer });
        setCurrentQuestion(currentQuestion + 1);
    };

    const calculateAdvice = () => {
        const numYes = Object.values(answers).filter((answer) => answer === 'sim').length;

        if (numYes === 3) {
            return 'Se marcar três sintomas, considere a chance de hipoadrenocortisismo. Para descartar, faça exames laboratoriais.';
        } else if (numYes < 3) {
            return 'Menos de três sintomas, leve chances. Atente-se a mais sintomas.';
        } else if (numYes > 3) {
            return 'Mais de três sintomas, altas chances. Considerar exames laboratoriais e estado integro e físico do animal.';
        }

        return '';
    };

    const handleSubmit = () => {
        const advice = calculateAdvice();
        setAdvice(advice);
        setSubmitted(true);
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setAdvice('');
        setSubmitted(false);
    };

    const renderButtons = () => {
        return (
            <div className="d-flex flex-column question">
                <div key={symptoms[currentQuestion].name}>
                    <span>{symptoms[currentQuestion].label}:</span>
                    <button
                        type="button"
                        className={answers[symptoms[currentQuestion].name] === 'sim' ? 'active-button' : 'inactive-button'}
                        onClick={() => handleAnswerClick('sim')}
                    >
                        Sim
                    </button>
                    <button
                        type="button"
                        className={answers[symptoms[currentQuestion].name] === 'nao' ? 'active-button' : 'inactive-button'}
                        onClick={() => handleAnswerClick('nao')}
                    >
                        Não
                    </button>
                </div>
                {currentQuestion === symptoms.length - 1 && (
                    <button type="button" onClick={handleSubmit} className="submit-button">Calcular</button>
                )}
            </div>
        );
    };

    return (
        <div className="container text-center">
            <form className="question-form">
                {renderButtons()}
            </form>
            {submitted && (
                <div className="advice">
                    {advice}
                    <button type="button" onClick={handleRestart} className="restart-button">Refazer Teste</button>
                </div>
            )}
        </div>
    );
};

export default QuestionForm;
