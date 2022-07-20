import { useState } from 'react'
import { Form } from '../Form'
import { Header } from '../Header'

import styles from './index.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Form />
      </div>
    </div>
  )
}
