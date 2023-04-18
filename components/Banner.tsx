import { ClipboardText, Trash } from "@phosphor-icons/react";
import styles from "./banner.module.css";
export function Banner() {
	return (
		<>
			<div className={styles.banner}>
				<p>
					todas tarefas <span>0</span>
				</p>
				<p>
					concluídas <span>0</span>
				</p>
			</div>
				<div className={styles.info}>
					<ClipboardText size={56}  />
					<p>
						<span>Você ainda não tem tarefas cadastradas</span>{" "}
						<span>Crie tarefas e organize seus itens a fazer</span>
					</p>
				</div>
		</>
	);
}
