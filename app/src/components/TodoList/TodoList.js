import Todo from '../Todo/Todo'

function TodoList(props) {
    const { todos } = props
    return todos.map((todo, index) => <Todo key={index} todo={todo} />)
}
export default TodoList
