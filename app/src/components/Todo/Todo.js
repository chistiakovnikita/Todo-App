import { RiTodoLine, RiDeleteBin6Line, RiCheckLine } from 'react-icons/ri'
import styles from './todo.module.css'

function Todo(props) {
    const { todo, deleteTodo, toggleTodo } = props

    return (
        <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`} onDoubleClick={() => deleteTodo(todo.id)}>
            <RiTodoLine className={styles.todoIcon} />
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBin6Line
                className={styles.deleteIcon}
                onClick={() => deleteTodo(todo.id)}
            />
            <RiCheckLine
                className={styles.checkIcon}
                onClick={() => toggleTodo(todo.id)}
            />
        </div>
    )
}
export default Todo
