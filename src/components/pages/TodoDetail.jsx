import { useParams, useNavigate } from "react-router-dom";

const TodoDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Normally, you would fetch this data from a backend or context.
    // Since we don't have a backend, let's use a dummy description.
    const dummyDescription = "This is the description of the selected todo.";

    return (
        <div className="todo-detail">
            <h2>Todo ID: {id}</h2>
            <p>{dummyDescription}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default TodoDetail;
