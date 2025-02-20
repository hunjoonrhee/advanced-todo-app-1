import { useTranslation } from 'react-i18next';
import { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

// 아이템 삭제 -> 각각의 아이템에 삭제 버튼이 있음. 삭제 버튼을 클릭하면 아이템이 삭제가 됨. -> App.tsx에서 상태 변화 (todos)가 일어나야 함.
// 따라서 삭제 메서드는 App.tsx에 있어야 하고 프롭스로 넘어와야 함.
// 아이템 완료로 상태 바꾸기 -> 아이템을 클릭하면 상태가 바뀜. -> 이 상태도 App.tsx에서 바뀌어야 함. 따라서 이 상태를 바꿔주는 메서드도 프롭스로 넘어와야함.

const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
  const { t } = useTranslation();
  const { todo, onToggleComplete, onDeleteTodo } = props;

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggleComplete(todo.id)} style={{ cursor: 'pointer' }}>
        {todo.text}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)}> {t('delete_button')} </button>
    </li>
  );
};

export default TodoItem;
