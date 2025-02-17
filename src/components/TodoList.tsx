import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  const { todos } = props;
  return (
    <ul>
      {todos.length === 0 ? (
        <p> no task </p>
      ) : (
        todos.map((todo) => (
          // TodoItem 컴포넌트가 렌더링되는 부분
          <TodoItem key={todo.id} todo={todo} />
          // <li key={todo.id}> {todo.text} </li>
        ))
      )}
    </ul>
  );
};

export default TodoList;
