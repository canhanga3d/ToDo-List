import { useState, FormEvent, ChangeEvent } from "react";
import { v4 as uuid4 } from "uuid";
import { PlusCircle } from "@phosphor-icons/react";
import { Control } from "./Control";
import { Banner } from "./Banner";
import { Tasks } from "./Tasks";
import styles from "./TodoManager.module.css";
interface Todo {
	id: string;
	todo: string;
	isCompleted: boolean;
}
export function TodoManager() {
	const [newTasks, setNewTasks] = useState("");
	const [todos, setTodos] = useState<Todo[]>([]);

	function handleNewTask(e: ChangeEvent<HTMLInputElement>) {
		setNewTasks(e.target.value);
	}

	function handleCreateNewTodo(e: FormEvent) {

		e.preventDefault();
		const newTodo: Todo = {
			id: uuid4(),
			todo: newTasks,
			isCompleted: false,
		};
		setTodos([...todos, newTodo]);
		setNewTasks("");
	}


	return (
		<>
			<form className={styles.form} onSubmit={handleCreateNewTodo}>
				<input
					type="text"
					name="inTask"
					id="inTask"
					value={newTasks}
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
				<Tasks todos={todos}  />
			) : (
				<Banner />
			)}
		</>
	);
}
