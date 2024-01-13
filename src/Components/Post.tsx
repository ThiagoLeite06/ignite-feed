import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        hasBorder
                        src="https://github.com/thiagoleite06.png" />

                    <div className={styles.authorInfo}>
                        <strong>Thiago Leite</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time
                    title="11 de Janiero às 20:45h"
                    dateTime="2024-01-11">Publicado há 1h</time>
            </header>
            <div className='styles.content'>
                <p>Loren Ipsun dolor sit amet</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p><a href="">Hi!</a></p>
                <p>
                    <a href="">#</a>
                    <a href="">#</a>
                    <a href="">#</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea placeholder="Deixe um comentário" />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}