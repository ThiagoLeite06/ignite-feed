import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/thiagoleite06.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Leite</strong>
                            <time
                                title="11 de Janiero às 20:45h"
                                dateTime="2024-01-11">Publicado há 1h</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir<span>20</span>
                    </button>

                </footer>
            </div>
        </div>
    )
}