import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import styles from "./App.module.css"
import { Control } from "./components/Control";
import { Form } from "./components/Form";
 const todos = [1]
export function App() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Form />
				<Control />
				{todos.length > 0 ? <Tasks /> : <Banner />}
			</main>
		</>
	);
}
