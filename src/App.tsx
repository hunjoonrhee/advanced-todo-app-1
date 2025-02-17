import "./App.css";
import TodoForm from "./components/TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./types/Todo";
import TodoList from "./components/TodoList";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App: React.FC = () => {
  // Todos의 리스트 상태
  // 원래 초기 상태를 useState로 로컬 컴포넌트 상태로 빈 배열로 정의를 했다면, 이제 이 초기 상태가 로컬 스토리지에 있는 배열이 되어야 한다.
  // 배열은 빈 배열일 수도 있고, 아닐 수도 있다
  // const [todos, setTodos] = useState<Todo[]>(() => {
  //   const storedTodos = localStorage.getItem("todos");
  //   return storedTodos ? JSON.parse(storedTodos) : [];
  // });
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const addTodo = (text: string) => {
    // 여기에 새로운 투두, text가 저장이 된다. -> 로컬 스토리지의 todos에 저장
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];
    console.log("updatedTodos ---> ", updatedTodos);
    setTodos(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id: string) => {
    // 입력인자로 들어온 아이디: 선택된 투두의 아이디. 이 아이디를 제외하고 새로운 투두s 로 업데이트
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    console.log(updatedTodos);
    setTodos(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleComplete = (id: string) => {
    // 해당 id의 투두를 찾고, 그 투두의 completed 속성을 true로 바꾸기
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    console.log(updatedTodos);
    setTodos(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  // 문제: localStorage.setItem("todos", JSON.stringify(updatedTodos)) 이 코드가 반복되고 있다. 이 코드 반복을 줄이기 위한 방법 중 하나가
  // 커스텀 훅을 사용하는 것이다.

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
