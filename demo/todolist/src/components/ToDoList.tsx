import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoListItem, { IToDoListItem } from './ToDoListItem';
import AddToDoForm from './AddToDoForm';

const initialToDos: Array<IToDoListItem> = [
  // hack to disable prettier single-line nonsense
  // https://github.com/prettier/prettier-vscode/issues/352
  { name: 'Item 1' },
  { name: 'Item 2' },
  { name: 'Item 3' },
];

const ToDoList: React.FC = () => {
  const [toDos, setToDos] = useState(initialToDos);
  const [newToDoName, setNewToDoName] = useState('');

  const addToDos = (name: string) => {
    if (name === '') {
      return;
    }

    const newTodo = {
      name,
    };

    setToDos([...toDos, newTodo]);
  };

  return (
    <div>
      {/* Title of the ToDoList page*/}
      <h1>ToDoList</h1>

      {/* List of ToDoItems */}
      <ul>
        {toDos.map((toDo) => (
          <ToDoListItem key={uuidv4()} name={toDo.name}></ToDoListItem>
        ))}
      </ul>

      {/* Form to add a new todo */}
      <AddToDoForm newToDoName={newToDoName} setNewToDoName={setNewToDoName} addToDos={addToDos}></AddToDoForm>
    </div>
  );
};

export default ToDoList;
