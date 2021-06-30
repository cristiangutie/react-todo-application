import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoFunctions() {
	const [todos, setTodos] = useState([]);

	const addTodo = todo => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		setTodos([todo, ...todos]);
	};

	const removeTodo = id => {
		setTodos([...todos].filter(todo => todo.id !== id));
	};

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem("todos"));
		if (todos) {
			setTodos(todos);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Poiret One", "Comfortaa"]
			}
		});
	}, []);

	return (
		<div className="d-flex flex-column align-items-center stack p-0">
			<h1 className="px-5 title display-1 font-weight-light text-muted">
				todos
			</h1>
			<TodoForm onSubmit={addTodo} />
			<Todo todos={todos} removeTodo={removeTodo} />
			<p className="footer-text pt-3 pl-3 align-self-start text-muted">
				{!todos.length
					? "No todos, add a todo"
					: todos.length == 1
					? `${todos.length} todo left`
					: `${todos.length} todos left`}
			</p>
		</div>
	);
}

export default TodoFunctions;
