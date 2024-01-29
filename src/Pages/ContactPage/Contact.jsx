// Page "Contact"
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './contact.module.scss';

export default function Contact() {
    return (
        <>
        <div className={styles.contact}>
            <div className={`d-flex flex-column justify-content-center container ${styles.contactChildren}`}> 
               <PageTitle title='Contact Form' align='right'/>
               <form className='d-flex flex-column align-items-end m-20'>
                  <input className='m-10 p-20' type="text" placeholder='Your Firstname'/>
                  <input className='m-10 p-20' type="text" placeholder='Your Lastname'/>
                  <input className='m-10 p-20' type="number" placeholder='Your Telephone Number'/>
                  <input className='m-10 p-20' type="text" placeholder='Your Email'/>
                <button className='m-10 p-20'>Send</button>
               </form>
            </div>
        </div>
        </>
    );
}