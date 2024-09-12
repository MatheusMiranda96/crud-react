import styles from './Grid.module.css'
import { FaEdit, FaTrash } from "react-icons/fa";



const Grid = ({ users }) => {
    return(
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.th}>Nome</th>
                    <th className={styles.th}>Email</th>
                    <th className={styles.th}>Telefone</th>
                    <th className={styles.th}></th>
                    <th className={styles.th}></th>
                </tr>
            </thead>
            <tbody>
              {users.map((item, i) => (
                <tr key={i}>
                    <td className={styles.td}>{item.nome}</td>
                    <td className={styles.td}>{item.email}</td>
                    <td className={styles.td}>{item.fone}</td>
                    <td className={styles.td}>
                        <FaEdit />
                    </td>
                    <td className={styles.td}>
                        <FaTrash />
                    </td>
                </tr>
              ))}
            </tbody>
        </table>
    )
}

export default Grid