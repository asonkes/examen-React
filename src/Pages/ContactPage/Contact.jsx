import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './contact.module.scss';

export default function Contact() {
    return (
        <>
        <div className={styles.contact}>
            <div className={`d-flex flex-column justify-content-center container ${styles.contactChildren}`}> 
               <PageTitle title='Formulaire de Contact' align='right'/>
               <form className='d-flex flex-column align-items-end m-20'>
                  <input className='m-10 p-20' type="text" placeholder='Votre nom'/>
                  <input className='m-10 p-20' type="text" placeholder='Votre Prénom'/>
                  <input className='m-10 p-20' type="number" placeholder='Votre Numéro de Téléphone'/>
                  <input className='m-10 p-20' type="text" placeholder='Votre E-mail'/>
                <button className='m-10 p-20'>Envoyer</button>
               </form>
            </div>
        </div>
        </>
    );
}