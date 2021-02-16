import React from 'react';

export interface IToDoListItem {
  name: string;
}

const ToDoListItem: React.FC<IToDoListItem> = ({ name }: IToDoListItem) => {
  return <li>{name}</li>;
};

export default ToDoListItem;
