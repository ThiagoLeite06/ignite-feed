import { Post } from "./Components/Post"
import { Header } from "./Header"
import styles from "./App.module.css"

import './global.css'
import { Sidebar } from "./Components/Sidebar"

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
