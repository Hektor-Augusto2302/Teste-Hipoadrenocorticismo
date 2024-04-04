import './Question.css';
import QuestionForm from '../../components/QuestionForm/QuestionForm'

const Question = () => {
    return (
        <div className='img-question'>
            <div className='d-flex justify-content-center align-items-center'>
                <QuestionForm />
            </div>
        </div>
    )
}

export default Question