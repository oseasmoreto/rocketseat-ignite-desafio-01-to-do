import styles from './index.module.css'

import logoToDo from '../../assets/logo.svg';

export function Header() {
 return (
    <header className={styles.header}>
      <img src={logoToDo} alt="To-do" />
    </header>
 )
}