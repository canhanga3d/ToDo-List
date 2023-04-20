import { Header } from "./components/Header";
import styles from "./App.module.css";
import { TodoManager } from "./components/TodoManager";

export function App() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<TodoManager />
			</main>
		</>
	);
}
