import './ButtonQuestion.css'
import { Link } from 'react-router-dom'

const ButtonQuestion = () => {
    return (
        <div className='link-button text-center'>
            <Link to='/questions'>Vamos ao Teste</Link>
        </div>
    )
}

export default ButtonQuestion