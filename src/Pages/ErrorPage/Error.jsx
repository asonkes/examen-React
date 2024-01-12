import styles from "./Error.module.scss";
import PageTitle from '../../components/PageTitle/PageTitle';
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div >
            <PageTitle title='Error Page' align='center'/>
            <div className={styles.error}>
                <div className={`d-flex justify-content-center align-items-end ${styles.errorButton}`}>
                    <Link to="/">
                        <button className="btn-special btn-primary m-20">BACK</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}