import { ChangeEvent, useState } from "react";
import CardComponent from "../components/CardComponent";

const TodoList: React.FC = () => {
  return (
    <div>
      <h1>Todo-list card</h1>
      <CardComponent />
    </div>
  );
};

export default TodoList;
