import { PlusCircle } from 'phosphor-react'
import styles from './index.module.css'

export function Form() {
 return (
    <div className={styles.form}>
      <form method="post">
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.createToDo} type="submit">Criar <PlusCircle size={16} /></button>
      </form>
    </div>
 )
}