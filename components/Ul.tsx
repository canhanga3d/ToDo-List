
import {Task} from"./Task"
import styles from "./Ul.module.css";
export function Ul() {
	return (
			<ul className={styles.listContainer}>
		<Task/>
			</ul>
	);
}
