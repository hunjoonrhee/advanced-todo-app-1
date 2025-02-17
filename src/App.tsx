import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./types/Todo";
import TodoList from "./components/TodoList";

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

  const deleteTodo = (id: string) => {
    // 입력인자로 들어온 아이디: 선택된 투두의 아이디. 이 아이디를 제외하고 새로운 투두s 로 업데이트
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    console.log(updatedTodos);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id: string) => {
    // 해당 id의 투두를 찾고, 그 투두의 completed 속성을 true로 바꾸기
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    console.log(updatedTodos);
    setTodos(updatedTodos);
  };

  // 문제: 새로고침을 하면 리스트가 다 사라진다. 즉, 저장이 안된다. 프론트엔드에서 저장을 하는 법 중 하나: 로컬 스토리지!

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleComplete={toggleComplete} />
      {/* //TodoList -> todos가 매핑으로 돌면서 리스트에 나옴. 나중에 리스트 안에 TodoItem 컴포넌트가 생성되는데, 여기에 각각의 todo가 입력됨. */}
    </div>
  );
};

export default App;
