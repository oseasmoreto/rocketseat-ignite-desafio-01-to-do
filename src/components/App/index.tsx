import { useState } from 'react'
import { Form } from '../Form'
import { Header } from '../Header'
import { TaskContainer } from '../TaskContainer'

import styles from './index.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Form />
        <main>
          <TaskContainer />
        </main>
      </div>
    </div>
  )
}
