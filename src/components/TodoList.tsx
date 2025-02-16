import { Todo } from "../types/Todo";

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
          <li key={todo.id}> {todo.text} </li>
        ))
      )}
    </ul>
  );
};

export default TodoList;
