import Todo from '../Todo'

function TodoList(props) {
    const { todos, deleteTodo, toggleTodo } = props

    return (
        <>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
            ))}
        </>
    )
}
export default TodoList
