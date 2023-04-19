import { ClipboardText } from "@phosphor-icons/react";
import styles from "./Banner.module.css";
export function Banner() {
	return (
		<>
			<div className={styles.banner}>
				<ClipboardText size={56} />
				<p>
					<span>Você ainda não tem tarefas cadastradas</span>{" "}
					<span>Crie tarefas e organize seus itens a fazer</span>
				</p>
			</div>
		</>
	);
}
