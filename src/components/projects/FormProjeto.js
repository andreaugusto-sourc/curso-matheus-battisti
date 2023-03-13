import {useState, useEffect} from 'react';
import styles from './FormProjeto.module.css';
import Input from '../forms/Input';
import Select from '../forms/Select';
import SubmitButton from '../forms/SubmitButton';

function FormProjeto({btnText}){
    const [categorias,setCategorias] = useState([]);
    useEffect( () => { 
        fetch("http://localhost:5000/categorias",{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategorias(data)
        })
        .catch(err => console.log(err))
    }, [] )
    return (
        <form className={styles.form}>

            <Input  type="text" name="name" placeholder="Insira o nome do seu projeto" text="Nome do projeto"/>

            <Input  type="number" name="budget" placeholder="Insira o orçamento total" text="Orçamento do projeto"/>

            <Select name="category_id" text="Selecione a categoria" options={categorias}/>            

            <SubmitButton text={btnText} />
        </form>
    );
}
export default FormProjeto;