import { Trash } from "@phosphor-icons/react";
import styles from "./Tasks.module.css";
export function Tasks(props: TasksProps) {
	const  {todos} = props;
	return (
		<>
			<ul className={styles.listContainer}>
				{todos.map((todo) => (
					<li key={todo.id}>
						<input type="checkbox"  />
						<p>
							<span>{todo.todo}</span>
						</p>
						<Trash size={24} />
					</li>
				))}
			</ul>
		</>
	);
}
