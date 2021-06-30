import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function TodoForm(props) {
	const [input, setInput] = useState("");

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	const handleChange = e => {
		setInput(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input
		});

		setInput("");
	};

	return (
		<>
			<form className="w-100" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="What are you going to do today?"
					value={input}
					name="text"
					className="text-dark px-5 py-3 w-100"
					onChange={handleChange}
					ref={inputRef}
				/>
			</form>
		</>
	);
}

TodoForm.propTypes = {
	onSubmit: PropTypes.array
};

export default TodoForm;
