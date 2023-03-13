import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux/action";
import { v4 as uuidv1} from "uuid"
// uuidv1() là một phương thức trong thư viện "uuid" để tạo ra một định danh duy nhất
export default function NewTodo() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const handleInput = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = () => {
        dispatch(addTodoAction(
            {
                id: uuidv1(),
                text: text
            }))
            setText('');
    }

    return (
        <div>
            <div className="d-flex">
                <div className="col-md-6">
                    <input className="form-control" type='text' 
                    onChange={handleInput} placeholder="Enter a new task"/>
                </div>
                <div className="mx-sm-3 mb-2">
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
                </div>
            </div>
            <hr/>
        </div>
    )
}

// className để áp dụng các lớp CSS từ Bootstrap cho các phần tử HTML. "d-flex" là một lớp CSS trong 
// Bootstrap để xác định một phần tử HTML là một thành phần dẫn đường linh hoạt. Lớp "col-md-6" được 
// sử dụng để tạo ra một cột chiếm 6/12 của lưới Bootstrap. Lớp "form-control" được sử dụng để định dạng 
// một phần tử đầu vào HTML như một phần tử đầu vào định dạng của Bootstrap.

// Một số lớp khác được sử dụng để định dạng các phần tử HTML và đồng thời áp dụng các lớp CSS của Bootstrap, 
// chẳng hạn như "mx-sm-3" được sử dụng để tạo ra một khoảng cách ngang margin-x: small 3 giữa hai phần tử, 
// và "mb-2" được sử dụng để thêm một khoảng cách dưới của phần tử chứa nó.

