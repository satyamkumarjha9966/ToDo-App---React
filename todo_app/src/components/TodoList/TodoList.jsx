import Todo from "./../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function TodoList() {
  const { list } = useContext(TodoContext);
  const { dispatch } = useContext(TodoDispatchContext);

  function onFinished(isFinished, todo) {
    dispatch({
      type: "finish_todo",
      payload: { todo, isFinished: isFinished },
    });
  }

  function onDelete(todo) {
    dispatch({ type: "delete_todo", payload: { todo } });
  }

  function onEdit(todoText, todo) {
    dispatch({ type: "edit_todo", payload: { todo, todoText } });
  }
  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            isFinished={todo.finished}
            todoData={todo.todoData}
            id={todo.id}
            changeFinished={(isFinished) => onFinished(isFinished, todo)}
            onDelete={() => onDelete(todo)}
            onEdit={(todoText) => onEdit(todoText, todo)}
          />
        ))}
    </div>
  );
}

export default TodoList;
