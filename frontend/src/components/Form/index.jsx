
import { useRef } from "react";
import styles from './Form.module.css'

const Form = ({ onEdit }) => {

    const ref  = useRef();

    return(
        <div className={styles.form_container} ref={ref}>

            <div className={styles.input_area}>
                <label>Nome</label>
                <input name="nome"/>
            </div>
            
            <div className={styles.input_area}>
                <label>E-mail</label>
                <input name="email" type="email"/>
            </div>
            
            <div className={styles.input_area}>
                <label>Telefone</label>
                <input name="fone"/>
            </div>
           
            <div className={styles.input_area}>
                <label>Data Nascimento</label>
                <input name="data_nascimento" type="date"/>
            </div>

            <button type='submit' className={styles.button}>SALVAR</button>

        </div>
    )
}

export default Form;