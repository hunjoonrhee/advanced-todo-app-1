import { Todo } from "../types/Todo";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
  const { todo } = props;

  return <li> {todo.text} </li>;
};

export default TodoItem;
