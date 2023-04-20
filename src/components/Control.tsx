import styles from "./Control.module.css";
interface Iprops {
	counterTask: number;
	counterTaskCompleted: number;
}
export function Control({ counterTask, counterTaskCompleted }: Iprops) {
	console.log();
	return (
		<>
			<div className={styles.controller}>
				<p>
					todas tarefas <span>{counterTask}</span>
				</p>
				<p>
					concluídas{" "}
					<span>
						{counterTaskCompleted} de {counterTask}
					</span>
				</p>
			</div>
		</>
	);
}
