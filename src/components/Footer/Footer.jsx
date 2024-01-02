import styles from "./Footer.module.scss";

export default function Footer() {
    return (
    <footer className={ `d-flex align-items-center justify-content-center ${ styles.footer }` }>
        <p className="p-20">Copyright © 2023 Cookchef Audrey Sonkes</p>
    </footer>
    );
}