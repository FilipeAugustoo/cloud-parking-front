import Box from "components/Box";
import ErrorText from "components/ErrorText";
import { useApi } from "hooks/useApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from './RegistrarEntrada.module.scss';

type CredentialInputs = {
  placa: string
};


export default function RegistrarEntrada() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<CredentialInputs>();
  const api = useApi();
  
  const registrar: SubmitHandler<CredentialInputs> = data => { 
    api.entryCar(data.placa);
    navigate('/');
    
  }

  return (
    <Box>
      <form className={styles.form_principal} onSubmit={ handleSubmit(registrar) }>
        <input 
          className={styles.form_principal__input} 
          type="text" 
          placeholder="Placa do Carro"
          {...register("placa", { pattern: RegExp('^[A-Z]{3}\\-\\d{4}$') })} 
        />
        {errors.placa && <ErrorText>Placa deve ser no formato: 'AAA-0000</ErrorText>}

        <button className={styles.form_principal__botao}>Registrar</button>
      </form>
    </Box>
  );
}