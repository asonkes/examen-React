import styles from './PageTitle.module.scss';

export default function PageTitle({title, align}) {
    const alignement = () => {
        if(align === "left") {
            return styles.pageTitleLeft
        } else if (align === "right") {
            return styles.pageTitleRight
        } else {
            return styles.pageTitleCenter
        }
    }

    return <h1 className={`${styles.pageTitle} ${alignement()}`}>{title}</h1>
}