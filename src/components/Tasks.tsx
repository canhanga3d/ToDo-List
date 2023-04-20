import { Trash } from "@phosphor-icons/react";
import styles from "./Tasks.module.css";

interface Task {
	id: string;
	description: string;
	completed: boolean;
}

interface Props {
	tasks: Task[];
	deleteTask: (taskId: string) => void;
	toggleCompleted: (taskId: string) => void;
}

export function Tasks({ tasks, deleteTask, toggleCompleted }: Props) {
	function handleDeleteTask(taskId: string) {
		deleteTask(taskId);
	}

	function handleToggleCompleted(taskId: string) {
		toggleCompleted(taskId);
	}

	return (
		<>
			<ul className={styles.listContainer}>
				{tasks.map((task) => (
					<li key={task.id}>
						<input
							type="checkbox"
							checked={task.completed}
							onChange={() => handleToggleCompleted(task.id)}
						/>
						<p className={task.completed ? styles.completed : undefined}>
							{task.description}
						</p>
						<button
							title="Deletar toDo"
							onClick={() => handleDeleteTask(task.id)}>
							<Trash size={24} />
						</button>
					</li>
				))}
			</ul>
		</>
	);
}
