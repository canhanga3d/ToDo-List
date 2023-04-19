import { Trash } from "@phosphor-icons/react";
import styles from "./Tasks.module.css";
export function Tasks() {
	return (
		<>
			<ul className={styles.listContainer}>
				<li>
					<input type="checkbox" name="" id="" />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore
					</p>
					<Trash size={24} />
				</li>
				<li>
					<input type="checkbox" name="" id="" />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem labore
					</p>
					<Trash size={24} />
				</li>
			</ul>
		</>
	);
}
