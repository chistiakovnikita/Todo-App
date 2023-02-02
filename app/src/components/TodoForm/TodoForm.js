import { useState } from 'react'
import styles from './todoForm.module.css'
import Button from '../UI/Button'


function TodoForm(props) {
    const { addTodo } = props

    const [text, setText] = useState('')

    const onSubmitHandler = (evt) => {
        evt.preventDefault()
        addTodo(text)
        setText('')
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input
                    placeholder="Enter new todo"
                    value={text}
                    onChange={(evt) => setText(evt.target.value)}
                />
                <Button type="submit" >Submit</Button>
            </form>
        </div>
    )
}

export default TodoForm
