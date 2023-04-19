import {PlusCircle, Pulse } from "@phosphor-icons/react"
import styles from "./Form.module.css"
export function Form(){
  return(
    <>
    <form className={styles.form}>
      <input type="text" name="" id="" placeholder="Descrição da tarefa"/>
      <button type="submit">Criar <PlusCircle size={20}/> </button>
    </form>
    </>
  )
}