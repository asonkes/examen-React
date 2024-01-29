import styles from './PageTitle.module.scss';

export default function PageTitle({title, align, className, ...props}) {
    const alignement = () => {
        if(align === "left") {
            return styles.pageTitleLeft
        } else if (align === "right") {
            return styles.pageTitleRight
        } else {
            return styles.pageTitleCenter
        }
    }

    return <h1 {...props} className={`${styles.pageTitle} ${alignement()} ${className ? className : ('')}`}>{title}</h1>
}