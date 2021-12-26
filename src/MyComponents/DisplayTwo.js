import React from 'react'
import styles from './style.module.css'

export const DisplayTwo = (props) => {
    
    return (
        <div className={styles.contentBox}>
            
            <p>Name: {props.emp.name}</p>
            <p>Email: {props.emp.email}</p>
            <p>Department: {props.emp.dept}</p>

            
        </div>
    )
}
