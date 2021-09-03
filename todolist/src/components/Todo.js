const Todo = (props) => {
    const todoClasses = [];
    if (props.todo.complete) {
      todoClasses.push("strike-through");
    }

    return ( 
    <div>
        <input onChange={(event) => {
            props.handleToggleComplete(props.i);
        }} 
        checked={props.todo.complete} 
        type="checkbox" />
        <span className={todoClasses.join(" ")}>{props.todo.text}</span>
        <button onClick={(event) => {
            props.handleTodoDelete(props.i);
        }} >Delete</button>
    </div>
    );
};

export default Todo;