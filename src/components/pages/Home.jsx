import { useState } from "react";
import { Link } from "react-router-dom";
import TodoForm from '../TodoForm/TodoForm';
const Home = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all"); // "all", "in-progress", "completed"

    const addTodo = (newTodo) => {
        setTodos([...todos, { ...newTodo, id: Date.now(), status: "in-progress" }]);
    };

    const changeStatus = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, status: todo.status === "in-progress" ? "completed" : "in-progress" }
                    : todo
            )
        );
    };

    const filteredTodos =
        filter === "all"
            ? todos
            : todos.filter((todo) => todo.status === filter);

    return (
        <div className="app">
            <TodoForm addTodo={addTodo} />

            <div className="filters">
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("in-progress")}>In Progress</button>
                <button onClick={() => setFilter("completed")}>Completed</button>
            </div>

            <div className="todo-list">
                {filteredTodos.map((todo) => (
                    <div key={todo.id} className="todo-item">
                        <Link to={`/todo/${todo.id}`}>
                            <p><strong>{todo.title}</strong></p>
                        </Link>
                        <p>{todo.status}</p>
                        <button onClick={() => changeStatus(todo.id)}>
                            {todo.status === "in-progress" ? "Mark Completed" : "Mark In Progress"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
