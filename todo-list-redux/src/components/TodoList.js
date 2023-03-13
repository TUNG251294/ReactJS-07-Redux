// Sử dụng useSelector để truy cập state
// Hiển thị danh sách todos với component TodoListItem
import {useSelector} from 'react-redux';
import TodoListItem from './TodoListItem';

const selectTodos = state => state.todos

export default function TodoList() {
    const todos = useSelector(selectTodos)
    return (
        <div>
            {todos.map(todo => {
                return(
                    <TodoListItem todo = {todo} key = {todo.id}/>
                );
            })}
        </div>
    )
}

