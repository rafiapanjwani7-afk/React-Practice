import React, { useState } from 'react'
import styles from '../styles/Usestate.module.css'

const UseStateComponents = () => {
  // yeah value get hu rahe hai wo click karne per display karna hai
  function handleChange(e) {
    console.log(e.target.value)
    setInputName(e.target.value)

  }

  //click karna per name display ho 
  // useState is a React hook that allows you to add state to functional components. In this code snippet, the `UseStateComponents` component uses the `useState` hook to manage a piece of state called `myName`. The initial value of `myName` is set to "rafia".
  const [inputName, setInputName] = useState("")
  const [myName, setMyName] = useState("rafia")
  const [salary, setSalary] = useState("1000")
  function ChangeName() {
    // setMyName("rafia samiullah")
    setMyName(inputName)
    setSalary("2000")
    setInputName("")
  }
  return (
    <div className={styles.container}>
      <input type="text" value={inputName} onChange={handleChange} placeholder="Enter text" className={styles.input} />
      <br />
      <div className={styles.name}>Name: {myName}</div>
      <div className={styles.salary}>Salary: {salary}</div>
      <br />
      <button onClick={ChangeName} className={styles.button}>
        click me
      </button>
    </div>
  )
}

export default UseStateComponents
