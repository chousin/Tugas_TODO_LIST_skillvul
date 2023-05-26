import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash'
import { edit2 } from 'react-icons-kit/feather/edit2'
import { removeTodo, handleCheckbox } from '../redux/actions';

export const Todos = ({ handleEditClick, editFormVisibility }) => {
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.operationsReducer);
    return todos.map((todo) => (
        <div key={todo.id} className='row align-items-center '>
            <div className="col d-flex justify-content-between">
                <div className='content'>
                    <p style={todo.completed === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                        {todo.todo}
                    </p>
                </div>
                <div className='actions-box d-flex align-items-center justify-content-between'>
                    {editFormVisibility === false && (
                        <>
                            {editFormVisibility === false && (
                                <input className='form-check-input' type="checkbox" checked={todo.completed}
                                    onChange={() => dispatch(handleCheckbox(todo.id))}></input>
                            )}
                            <span onClick={() => handleEditClick(todo)}><Icon icon={edit2} /></span>
                            <span onClick={() => dispatch(removeTodo(todo.id))}><Icon icon={trash} /></span>
                        </>
                    )}
                </div>
            </div>
        </div>
    ))
}
