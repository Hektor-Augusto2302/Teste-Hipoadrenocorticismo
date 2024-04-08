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

        if (currentQuestion < symptoms.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const calculateAdvice = () => {
        const numYes = Object.values(answers).filter((answer) => answer === 'sim').length;

        if (numYes === 3) {
            return 'Probabilidade média de o animal estar com hipoadrenocorticismo. Como testes laboratoriais funcionais, indicamos: hiponatremia, Hipercalemia, Hipoglicemia, hipostenúria e Teste funcional (estimulação com ACTH)';
        } else if (numYes < 3) {
            return 'Baixa probabilidade do animal estar com hipoadrenocorticismo atente-se aos sintomas.';
        } else if (numYes > 3) {
            return 'Alta probabilidade de o animal estar com hipoadrenocorticismo. Como testes laboratoriais funcionais, indicamos: hiponatremia, Hipercalemia, Hipoglicemia, hipostenúria e Teste funcional (estimulação com ACTH).';
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
            <div className="d-flex flex-column question render-buttons justify-content-center align-items-center text-center">
                <div className="card card-width">
                    <div className="card-header" key={symptoms[currentQuestion].name}>
                        <span>{symptoms[currentQuestion].label}:</span>
                    </div>
                    <div className='d-flex justify-content-center align-items-center my-3'>
                        <button
                            type="button"
                            className={answers[symptoms[currentQuestion].name] === 'sim' ? 'active-button me-3' : 'inactive-button me-3'}
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
                    <div className='my-1'>
                        {currentQuestion === symptoms.length - 1 && (
                            <button type="button" onClick={handleSubmit} className="submit-button">Calcular</button>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container">
            <form className="question-form">
                {renderButtons()}
            </form>
            {submitted && (
                <div className="advice mt-5 d-flex flex-column justify-content-center align-items-center">
                    {advice}
                    <button type="button" onClick={handleRestart} className="restart-button">Refazer Teste</button>
                </div>
            )}
        </div>
    );
};

export default QuestionForm;
