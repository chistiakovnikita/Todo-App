import { RiDeleteBin6Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'

function TodosControls(props) {
    const { resetTodos, deleteComletedTodos, comletedTodos } = props
    return(
        <>
            <Button title='reset' onClick={resetTodos}><RiRefreshLine /></Button> 
            <Button title='delete completed' onClick={deleteComletedTodos} disabled={!comletedTodos}><RiDeleteBin6Line /></Button>
        </>
    )

}

export default TodosControls