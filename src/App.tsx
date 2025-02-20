import './App.css';
import TodoForm from './components/TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './types/Todo';
import TodoList from './components/TodoList';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useTranslation } from 'react-i18next';
import './i18n/18n';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  // Todos의 리스트 상태
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>{t('app_title')}</h1>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('de')}>German</button>
      </div>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleComplete={toggleComplete} />
      {/* //TodoList -> todos가 매핑으로 돌면서 리스트에 나옴. 나중에 리스트 안에 TodoItem 컴포넌트가 생성되는데, 여기에 각각의 todo가 입력됨. */}
    </div>
  );
};

export default App;
