<div align=center>

# ToDo List 
<div align=left>
Este código é um gerenciador de tarefas em React, onde o usuário pode criar novas tarefas, marcar como concluídas e excluí-las. O código é dividido em três componentes:
<br><br><br><br>

* **TodoManager:** componente que gerencia toda a lógica do gerenciador de tarefas, incluindo a criação, exclusão e conclusão de tarefas. Ele é o componente principal e possui dois estados: **newTask**, que representa a descrição da nova tarefa que o usuário está digitando, e **todos**, que é um array de objetos **Todo** representando todas as tarefas criadas até o momento. O componente é responsável por renderizar a entrada de nova tarefa, as tarefas já criadas e um componente de controle quando há tarefas disponíveis.
<br><br>

* **Tasks:** componente que recebe uma lista de objetos **Todo** e é responsável por renderizar a lista de tarefas, bem como as opções de exclusão e marcação de tarefa como concluída. Ele recebe três propriedades: **tasks, que é o array de objetos Todo a serem renderizados, deleteTask, que é uma função responsável por excluir uma tarefa com base em seu ID, e toggleCompleted, que é uma função responsável por marcar uma tarefa como concluída com base em seu ID.**

<br><br>

* **Control:** componente que é renderizado quando há tarefas disponíveis e permite ao usuário marcar todas as tarefas como concluídas ou excluir todas as tarefas criadas.



</div>


</div>


Documentação Detalhada
TodoManager
useState é utilizado para criar dois estados: newTask e todos. newTask é inicializado como uma string vazia e todos é inicializado como um array vazio.

handleNewTask é uma função que é acionada toda vez que o usuário digita algo na entrada de nova tarefa. Ele atualiza o estado newTask com o valor digitado pelo usuário.

handleCreateNewTodo é uma função que é acionada quando o usuário envia o formulário de criação de nova tarefa. Ele cria uma nova tarefa com base no valor atual do estado newTask e adiciona essa nova tarefa ao array todos. Em seguida, ele redefine o estado newTask para uma string vazia, limpando assim o campo de entrada de nova tarefa.

deleteTask é uma função que é acionada quando o usuário clica no botão de exclusão de uma tarefa. Ele filtra o array todos, removendo a tarefa com o ID correspondente ao passado como parâmetro.

toggleCompleted é uma função que é acionada quando o usuário clica na caixa de seleção de uma tarefa. Ele mapeia o array todos, verificando se a tarefa atual é a tarefa que foi marcada como concluída. Se for, ele cria uma nova tarefa com o mesmo ID e descrição, mas com o status completed invertido. Se não, ele mantém a tarefa inalterada. Em seguida, atualiza o estado todos com o array mapeado.

render do componente renderiza um formulário de criação de nova tarefa, um componente Control (se houver tarefas disponíveis) e um componente Tasks (se houver tarefas disponíveis)


TodoManager.tsx

```Typescript
import { useState, FormEvent, ChangeEvent } from "react";
import { v4 as uuid4 } from "uuid";
import { PlusCircle } from "@phosphor-icons/react";
import { Control } from "./Control";
import { Banner } from "./Banner";
import { Tasks } from "./Tasks";
import styles from "./TodoManager.module.css";
```

Nesta parte, estamos importando as dependências e os componentes que serão usados no nosso componente TodoManager. São eles:

useState, FormEvent e ChangeEvent do React, para gerenciar o estado dos nossos inputs e formulários.
uuid4, para gerar um ID único para cada tarefa adicionada.
PlusCircle do pacote @phosphor-icons/react, para exibir o ícone de adicionar tarefa.
Control, Banner e Tasks, nossos componentes auxiliares que serão usados dentro do TodoManager.
styles, um objeto que importa as classes CSS do nosso componente TodoManager.


```Typescript
interface Todo {
  id: string;
  description: string;
  completed: boolean;
}

export function TodoManager() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
```
Nesta parte, estamos definindo a interface Todo que representa a estrutura de cada tarefa no nosso aplicativo. Cada tarefa terá um ID (id), uma descrição (description) e um status de completado (completed).

Dentro do componente TodoManager, usamos o useState para criar dois estados: newTask e todos.

newTask é uma string vazia que armazena o valor do input de descrição da tarefa.
todos é um array de objetos Todo, que armazena as tarefas adicionadas pelo usuário.

```Typescript
  function handleNewTask(e: ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  function handleCreateNewTodo(e: FormEvent) {
    e.preventDefault();
    const newTodo: Todo = {
      id: uuid4(),
      description: newTask,
      completed: false,
    };
    setTodos((prevState) => [...prevState, newTodo]);
    setNewTask("");
  }

```

Nessa parte, temos duas funções:

handleNewTask: essa função é executada sempre que o usuário digita algo no input de descrição da tarefa. Ela atualiza o estado newTask com o valor digitado pelo usuário.

handleCreateNewTodo: essa função é executada quando o usuário clica no botão de adicionar tarefa. Primeiro, ela previne o comportamento padrão do formulário, que é enviar um request para o servidor e recarregar a página. Em seguida, ela cria um novo objeto Todo, com o ID gerado pelo uuid4, a descrição da tarefa (newTask) e o status de completado inicialmente definido como false.

Então, o setTodos é chamado para atualizar o estado de todos, adicionando o novo objeto Todo ao final do array. Observe que, nesse caso, estamos usando a função setState com um callback que recebe o estado anterior (prevState) como argumento. Isso é uma prática recomendada para garantir a imutabilidade do estado.

Por fim, setNewTask é chamado para limpar o input de descrição da tarefa.

```Typescript
  function deleteTask(taskId: string) {
    setTodos((prevState) => prevState.filter
```

```Typescript
import { Trash } from "@phosphor-icons/react";
import styles from "./Tasks.module.css";

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

interface Props {
  task: Task;
  onDeleteTask: (taskId: string) => void;
  onToggleCompleted: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, onToggleCompleted }: Props) {
  ```
import { Trash } from "@phosphor-icons/react";: aqui estamos importando o ícone de lixeira da biblioteca Phosphor Icons React.
import styles from "./Tasks.module.css";: aqui estamos importando o arquivo CSS que contém as classes para estilização do componente Task.
interface Task { ... }: aqui estamos definindo uma interface para o objeto Task, que tem as propriedades id, description e completed.
interface Props { ... }: aqui estamos definindo uma interface para as propriedades do componente Task, que incluem um objeto task do tipo Task, bem como duas funções para lidar com a exclusão de uma tarefa e a marcação de uma tarefa como concluída.
export function Task({ task, onDeleteTask, onToggleCompleted }: Props) {: aqui estamos definindo o componente Task como uma função que recebe as propriedades definidas na interface Props.
```Typescript
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleToggleCompleted() {
    onToggleCompleted(task.id);
  }
```
function handleDeleteTask() { ... }: aqui estamos definindo a função handleDeleteTask que é chamada quando o usuário clica no ícone de lixeira. A função chama a função onDeleteTask, passando o id da tarefa como parâmetro.
function handleToggleCompleted() { ... }: aqui estamos definindo a função handleToggleCompleted que é chamada quando o usuário marca ou desmarca a caixa de seleção de uma tarefa. A função chama a função onToggleCompleted, passando o id da tarefa como parâmetro.

```Typescript
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleCompleted}
      />
      <p className={task.completed ? styles.completed : undefined}>
        {task.description}
      </p>
      <button onClick={handleDeleteTask} title="Deletar toDo">
        <Trash size={24} />
      </button>
    </li>
  );
```
```Typescript
<li>: aqui estamos definindo uma lista HTML para cada tarefa.
<input ... />: aqui estamos definindo um elemento de entrada HTML do tipo checkbox para permitir que o usuário marque ou desmarque a tarefa como concluída. O atributo checked é definido com base no valor da propriedade completed da tarefa e o evento onChange é definido como a função handleToggleCompleted.
<p ...>: aqui estamos definindo um elemento HTML de parágrafo para exibir a descrição da tarefa. A classe styles.completed é adicionada se a tarefa estiver concluída, para exibir o texto com uma aparência diferente. Se a tarefa não estiver concluída, a classe é definida como undefined.
<button ...>: aqui estamos definindo um botão HTML com um ícone de li

```