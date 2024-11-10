import { useReducer, FormEvent } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type TodoState = {
  todos: Todo[];
};

type TodoAction =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "REMOVE_TODO"; id: number };

const initialState: TodoState = {
  todos: [],
};

const todoReducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.text,
            completed: false,
          },
        ],
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

// Just like useState, but more complicated
export const UseReducer = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("todo") as HTMLInputElement;
    if (input.value.trim()) {
      dispatch({ type: "ADD_TODO", text: input.value });
      form.reset();
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input type="text" name="todo" placeholder="Add todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                dispatch({ type: "TOGGLE_TODO", id: todo.id })
              }
            />
            <span
              style={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
                paddingRight: "1rem",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_TODO", id: todo.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
