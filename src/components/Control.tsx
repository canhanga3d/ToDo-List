import styles from "./Control.module.css";
export function Control() {
	return (
		<>
			<div className={styles.controller}>
				<p>
					todas tarefas <span>0</span>
				</p>
				<p>
					concluídas <span>0</span>
				</p>
			</div>
		</>
	);
}
