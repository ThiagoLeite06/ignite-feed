import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <>
            <aside className={styles.sidebar}>
                <img src="" alt="" />

                <div className={styles.profile}>
                    <strong>Thiago Leite</strong>
                    <span>Web/Mobile Developer</span>
                </div>

                <footer>
                    <a href="#">
                        Editar seu perfil
                    </a>
                </footer>
            </aside>
        </>

    )
}