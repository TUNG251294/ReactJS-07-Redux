const initialState = [
    {id: 1, text: 'Learn React'},
    {id: 2, text: 'Learn Redux'},
    {id: 3, text: 'Build something fun!'}
]

export default function todosReducer(state = initialState, action){
    switch(action.type){
    // thực hiện lưu một todo vào state   
        case 'todos/todoAdded': {
            return [...state, 
                {
                    id: action.payload.id,
                    text: action.payload.text
                }]
        }
    // thực hiện xoá một todo dựa vào id, payload của deleteTodoAction chỉ có id
    // filter() trả về một mảng mới với các phần tử thỏa mãn điều kiện trong hàm callback truyền vào   
        case 'todos/todoDeleted': {
            return state.filter(todo => todo.id !== action.payload)
        }
        default: 
            return state
    }
}