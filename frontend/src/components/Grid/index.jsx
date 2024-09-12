import styles from './Grid.module.css'


const Grid = () => {
    return(
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.th}>Nome</th>
                    <th className={styles.th}>Email</th>
                    <th className={styles.th}>Fone</th>
                </tr>
            </thead>
        </table>
    )
}

export default Grid