import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <>
            <aside className={styles.sidebar}>
                <img
                    className={styles.cover}
                    src="https://images.unsplash.com/photo-1682686580452-37f1892ee5e8" />

                <div className={styles.profile}>
                    <img
                        className={styles.avatar}
                        src="https://github.com/thiagoleite06.png" />
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