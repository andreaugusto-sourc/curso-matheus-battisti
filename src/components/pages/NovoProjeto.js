import styles from './NovoProjeto.module.css';
import FormProjeto from '../projects/FormProjeto';

function NovoProjeto() {
    return (
        <div className={styles.novoprojeto_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <FormProjeto />
        </div>
    );
}

export default NovoProjeto;