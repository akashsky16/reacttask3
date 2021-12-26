import React from 'react'
import { DisplayTwo } from './DisplayTwo'
import styles from './style.module.css'


export const Display = (props) => {
    const handleClick = () => {
        props.setFlag()
    }
    return (
        <div>
            <h1 className='text-center'>Employee Detail</h1>
            { 
                props.employee.map((emp) =>{
                    return <DisplayTwo emp={emp} setFlag={props.setFlag} />
                })
            }
            <button className={styles.btn} onClick={handleClick}>Back</button>
        </div>
    )
}
