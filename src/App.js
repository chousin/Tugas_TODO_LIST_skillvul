import { useState } from 'react';
import { FormTodo } from "./components/FormTodo";
import { Todos } from "./components/Todos";
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState('');

  // handleEditClick
  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  // cancelUpdate
  const cancelUpdate = () => {
    setEditFormVisibility(false);
  }

  return (
    <div className="todolist d-flex align-items-center mx-auto">
      <div className="container w-75">
        <div className="row w-100">
          <div className="col">
            <h1 className='text-center mb-2'>What's the plan for today?</h1>
            <p className='text-center mb-5'>Masukkan todomu dibawah ini</p>
            <FormTodo editFormVisibility={editFormVisibility} editTodo={editTodo}
              cancelUpdate={cancelUpdate} />
            <br />
            <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />
            {todos.length > 1 && (
              <button className='btn btn-danger btn-md mt-4'
                onClick={() => dispatch(deleteAll())}>Delete All</button>
            )}
            <br />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
