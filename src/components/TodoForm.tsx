import { ChangeEvent, useState } from "react";

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = (props: TodoFormProps) => {
  const { onAddTodo } = props;

  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText("");
    }
  };
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Add new Task">
      <input type="text" value={text} onChange={handleOnChange} placeholder="add new Task" aria-label="add new Task" />
      <button type="submit"> add Task </button>
    </form>
  );
};

export default TodoForm;
