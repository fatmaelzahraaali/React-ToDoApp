const TodoList = ({ todos }) => {
    return (
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <p><strong>{todo.title}</strong></p>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default TodoList;
  