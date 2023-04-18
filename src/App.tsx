import { Header } from "./components/Header";
import { Form } from "./components/Form";
import styles from "./App.module.css";
import { Banner } from "./components/Banner";
import { Task } from "./components/Task";
export function App() {
	return (
		<>
			<Header/>
			<main className={styles.main}>
				<Form/>
				<Banner/>
				<Task/>
			</main>
		</>
	);
}
