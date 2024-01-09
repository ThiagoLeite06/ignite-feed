import { Post } from "./Post"
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
          <Post author="Thiago" content="Loren ipsun dolor sit amet.." />
        </main>
      </div>
    </>
  )
}

export default App
