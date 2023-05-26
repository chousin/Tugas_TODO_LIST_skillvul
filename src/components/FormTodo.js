import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/actions';

export const FormTodo = ({ editFormVisibility, editTodo, cancelUpdate }) => {
    const dispatch = useDispatch();

    // default
    const [inputTodo, setInputTodo] = useState('');

    // edit
    const [editInputTodo, setEditInputTodo] = useState('');

    // useEffect untuk edit
    useEffect(() => {
        setEditInputTodo(editTodo.todo);
    }, [editTodo])

    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let data = {
            id: time,
            todo: inputTodo,
            completed: false
        }
        setInputTodo('');
        dispatch(addTodo(data))
    }

    // update todo
    const editSubmit = (e) => {
        e.preventDefault();
        let editedData = {
            id: editTodo.id,
            todo: editInputTodo,
            completed: false
        }
        dispatch(handleEditSubmit(editedData))
    }

    return (
        <>
            {editFormVisibility === false ? (
                <form className='form-group' onSubmit={handleSubmit}>
                    <div className='inputan d-flex'>
                        <input type="text" className='form-control field' required
                            value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
                        <div className="col">
                            <button type="submit" className='btn btn-primary btn-md'>Add</button>
                        </div>
                    </div>
                </form>
            ) : (
                <form className='form-group' onSubmit={editSubmit}>
                    <div className='inputan'>
                        <input type="text" className='form-control' required
                            value={editInputTodo || ""} onChange={(e) => setEditInputTodo(e.target.value)} />
                    </div>
                    <div className="button d-flex justify-content-between">
                        <button type="button" className='btn btn-warning text-white btn-md'
                            onClick={cancelUpdate}>Kembali</button>
                        <button type="submit" className='btn btn-success btn-md'>Update</button>
                    </div>
                </form>
            )}
        </>
    )
}
