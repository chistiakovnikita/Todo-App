import styles from './todo.module.css'

function Todo(props) {
    const { todo } = props

    return (
        <div className={styles.todo}>
            <div className={styles.todotext}>{todo}</div>
        </div>
    )
}
export default Todo
