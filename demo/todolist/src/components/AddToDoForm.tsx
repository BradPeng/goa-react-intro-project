import React from 'react';

interface IAddTodoForm {
  newToDoName: string;
  setNewToDoName: (name: string) => void;
  addToDos: (name: string) => void;
}

const AddToDoForm: React.FC<IAddTodoForm> = ({
  // hack to disable prettier single-line nonsense
  newToDoName,
  setNewToDoName,
  addToDos,
}: IAddTodoForm) => {
  return (
    <div>
      <form>
        {/* Text box to name the new item before adding it*/}
        <input
          type="text"
          value={newToDoName}
          placeholder="name"
          onChange={(event) => {
            setNewToDoName(event.target.value);
          }}
        ></input>

        {/* Button to add more ToDoItems */}
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            console.log('Add ToDo!');
            addToDos(newToDoName);
            setNewToDoName('');
          }}
        >
          Click me
        </button>
      </form>
    </div>
  );
};

export default AddToDoForm;
