import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <>
            <aside className={styles.sidebar}>
                <img
                    className={styles.cover}
                    src="https://images.unsplash.com/photo-1682686580452-37f1892ee5e8" />

                <div className={styles.profile}>
                    <Avatar hasBorder src="https://github.com/thiagoleite06.png" />
                    <strong>Thiago Leite</strong>
                    <span>Web/Mobile Developer</span>
                </div>

                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                </footer>
            </aside>
        </>

    )
}