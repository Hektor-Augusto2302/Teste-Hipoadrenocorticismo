import React, { useState } from 'react';
import './QuestionForm.css';

const QuestionForm = () => {
    const [answers, setAnswers] = useState({
        letargia: null,
        vomito: null,
        fraqueza: null,
        tremores: null,
        poliuria: null,
        polidipsia: null,
        perdaDePeso: null,
        diarreia: null,
    });

    const [advice, setAdvice] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleAnswerChange = (event) => {
        const { name, value } = event.target;
        setAnswers({ ...answers, [name]: value });
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const advice = calculateAdvice();
        setAdvice(advice);
        setSubmitted(true);
        setTimeout(() => {
            setAnswers({
                letargia: null,
                vomito: null,
                fraqueza: null,
                tremores: null,
                poliuria: null,
                polidipsia: null,
                perdaDePeso: null,
                diarreia: null,
            });
            setAdvice('');
            setSubmitted(false);
        }, 5000);
    };


    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit} className="question-form">
                <div className="d-flex flex-column question">
                    <span>Letargia:</span>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="letargia"
                            value="sim"
                            checked={answers.letargia === 'sim'}
                            onChange={handleAnswerChange}
                        />
                        Sim
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="letargia"
                            value="nao"
                            checked={answers.letargia === 'nao'}
                            onChange={handleAnswerChange}
                        />
                        Não
                    </label>
                    <span>Vomito:</span>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="vomito"
                            value="sim"
                            checked={answers.vomito === 'sim'}
                            onChange={handleAnswerChange}
                        />
                        Sim
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="vomito"
                            value="nao"
                            checked={answers.vomito === 'nao'}
                            onChange={handleAnswerChange}
                        />
                        Não
                    </label>
                    <span>Fraqueza:</span>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="fraqueza"
                            value="sim"
                            checked={answers.fraqueza === 'sim'}
                            onChange={handleAnswerChange}
                        />
                        Sim
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="fraqueza"
                            value="nao"
                            checked={answers.fraqueza === 'nao'}
                            onChange={handleAnswerChange}
                        />
                        Não
                    </label>
                    <span>Tremores:</span>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="tremores"
                            value="sim"
                            checked={answers.tremores === 'sim'}
                            onChange={handleAnswerChange}
                        />
                        Sim
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="tremores"
                            value="nao"
                            checked={answers.tremores === 'nao'}
                            onChange={handleAnswerChange}
                        />
                        Não
                    </label>
                    <span>Poliuria:</span>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="poliuria"
                            value="sim"
                            checked={answers.poliuria === 'sim'}
                            onChange={handleAnswerChange}
                        />
                        Sim
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="poliuria"
                            value="nao"
                            checked={answers.poliuria === 'nao'}
                            onChange={handleAnswerChange}
                        />
                        Não
                    </label>
                    <span>polidipsia:</span>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="polidipsia"
                            value="sim"
                            checked={answers.polidipsia === 'sim'}
                            onChange={handleAnswerChange}
                        />
                        Sim
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="polidipsia"
                            value="nao"
                            checked={answers.polidipsia === 'nao'}
                            onChange={handleAnswerChange}
                        />
                        Não
                    </label>
                    <span>Perda De Peso:</span>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="perdaDePeso"
                            value="sim"
                            checked={answers.perdaDePeso === 'sim'}
                            onChange={handleAnswerChange}
                        />
                        Sim
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="perdaDePeso"
                            value="nao"
                            checked={answers.perdaDePeso === 'nao'}
                            onChange={handleAnswerChange}
                        />
                        Não
                    </label>
                    <span>Diarreia:</span>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="diarreia"
                            value="sim"
                            checked={answers.diarreia === 'sim'}
                            onChange={handleAnswerChange}
                        />
                        Sim
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="diarreia"
                            value="nao"
                            checked={answers.diarreia === 'nao'}
                            onChange={handleAnswerChange}
                        />
                        Não
                    </label>
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>
            {submitted && <div className="advice">{advice}</div>}
        </div>
    );
};

export default QuestionForm;
