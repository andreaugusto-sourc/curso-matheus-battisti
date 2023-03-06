import styles from './FormProjeto.module.css';
import Input from '../forms/Input';
import Select from '../forms/Select';
import SubmitButton from '../forms/SubmitButton';

function FormProjeto({btnText}){
    return (
        <form className={styles.form}>

            <Input  type="text" name="name" placeholder="Insira o nome do seu projeto" text="Nome do projeto"/>

            <Input  type="number" name="budget" placeholder="Insira o orçamento total" text="Orçamento do projeto"/>

            <Select name="category_id" text="Selecione a categoria"/>            

            <SubmitButton text={btnText} />
        </form>
    );
}
export default FormProjeto;