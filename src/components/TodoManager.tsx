import { useState, FormEvent, ChangeEvent } from "react";
import { v4 as uuid4 } from "uuid";
import { PlusCircle } from "@phosphor-icons/react";
import { Control } from "./Control";
import { Banner } from "./Banner";
import { Tasks } from "./Tasks";
import styles from "./TodoManager.module.css";

interface Todo {
	id: string;
	description: string;
	completed: boolean;
}

export function TodoManager() {
	const [newTask, setNewTask] = useState("");
	const [todos, setTodos] = useState<Todo[]>([]);

	function handleNewTask(e: ChangeEvent<HTMLInputElement>) {
		setNewTask(e.target.value);
	}

	function handleCreateNewTodo(e: FormEvent) {
		e.preventDefault();
		const newTodo: Todo = {
			id: uuid4(),
			description: newTask,
			completed: false,
		};
		setTodos((prevTodos) => [...prevTodos, newTodo]);
		setNewTask("");
	}

	function deleteTask(taskId: string) {
		setTodos((prevTodos) => prevTodos.filter((task) => task.id !== taskId));
	}

	function toggleCompleted(taskId: string) {
		setTodos((prevTodos) =>
			prevTodos.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		);
	}

	return (
		<>
			<form className={styles.form} onSubmit={handleCreateNewTodo}>
				<input
					type="text"
					name="inTask"
					id="inTask"
					value={newTask}
					onChange={handleNewTask}
					placeholder="Descrição da tarefa"
				/>
				<label htmlFor="inTask" className={styles.srOnly}>
					Campo de entrada de tarefas
				</label>
				<button type="submit">
					Criar <PlusCircle size={20} />{" "}
				</button>
			</form>
			<Control />
			{todos.length > 0 ? (
				<Tasks
					tasks={todos}
					deleteTask={deleteTask}
					toggleCompleted={toggleCompleted}
				/>
			) : (
				<Banner />
			)}
		</>
	);
}
