import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = (props: TodoFormProps) => {
  const { t } = useTranslation();
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
      <input
        type="text"
        value={text}
        onChange={handleOnChange}
        placeholder={t("add_todo_placeholder")}
        aria-label={t("add_todo_placeholder")}
      />
      <button type="submit"> {t("add_button")} </button>
    </form>
  );
};

export default TodoForm;
