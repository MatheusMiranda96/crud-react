import './form.css'
import { useRef } from "react";

const Form = ({ onEdit }) => {

    const ref  = useRef();

    return(
        <div className="form_container" ref={ref}>

            <div className="input-area">
                <label>Nome</label>
                <input name="nome"/>
            </div>
            
            <div className="input-area">
                <label>E-mail</label>
                <input name="email" type="email"/>
            </div>
            
            <div className="input-area">
                <label>Telefone</label>
                <input name="fone"/>
            </div>
           
            <div className="input-area">
                <label>Data de nascimento</label>
                <input name="data_nascimento" type="date"/>
            </div>

        </div>
    )
}

export default Form;