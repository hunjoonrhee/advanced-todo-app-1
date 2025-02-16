import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./types/Todo";

const App: React.FC = () => {
  // Todos의 리스트 상태
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    // 여기에 새로운 투두, text가 저장이 된다.
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];
    console.log("updatedTodos ---> ", updatedTodos);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      {/* //TodoList -> todos가 매핑으로 돌면서 리스트에 나옴. 나중에 리스트 안에 TodoItem 컴포넌트가 생성되는데, 여기에 각각의 todo가 입력됨. */}
    </div>
  );
};

export default App;
