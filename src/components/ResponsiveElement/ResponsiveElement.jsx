// Pemret de pouvoir importer le fait qu'un élément soit "responsive"
export default function ResponsiveElement({children}) {

    return (
        <div className={`d-flex flex-row justify-content-center align-items-center`}>{children}</div>
    )
}