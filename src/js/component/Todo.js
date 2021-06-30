import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

function Todo({ todos, removeTodo }) {
	const [isVisible, setIsVisible] = useState(false);

	return todos.map((todo, index) => (
		<ul className="list-group w-100" key={index}>
			<li
				className="d-flex list-group-item rounded-0 ${} px-5 py-3 text-dark"
				key={todo.id}
				onMouseEnter={() => setIsVisible(true)}
				onMouseLeave={() => setIsVisible(false)}
				onClick={() => removeTodo(todo.id)}>
				{todo.text}
				{isVisible && (
					<span className="ml-auto">
						<RiCloseCircleLine />
					</span>
				)}
			</li>
		</ul>
	));
}

export default Todo;
