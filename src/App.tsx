import { Post } from "./Components/Post"
import { Header } from "./Header"
import styles from "./App.module.css"

import './global.css'
import { Sidebar } from "./Components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/thiagoleite06.png',
      name: 'Thiago Leite',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala, galeraa' },
      { type: 'paragraph', content: 'Fala, galeraa' },
      { type: 'paragraph', content: 'Fala, galeraa' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),

  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/thiagoleite06.png',
      name: 'Thiago Leite',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala, galeraa' },
      { type: 'paragraph', content: 'Fala, galeraa' },
      { type: 'paragraph', content: 'Fala, galeraa' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),

  }
]


function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
