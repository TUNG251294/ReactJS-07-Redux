// Component sẽ nhận giá trị props từ component TodoList
import { useDispatch } from "react-redux";
import { deleteTodoAction } from "../redux/action";

import React from 'react'

export default function TodoListItem(props) {
    const dispatch = useDispatch()
    const handleRemove = (id) => {
        dispatch(deleteTodoAction(id))
    }

    return (
        <div>
            <h4>{props.todo.text}</h4>
            <button className="btn btn-danger" type="button" onClick={() => handleRemove(props.todo.id)}>
                Remove
            </button>
        </div>
    )
}

