import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar}
                        src="https://github.com/thiagoleite06.png"
                        alt="foto"
                    />
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
            </div>

        </article>
    )
}