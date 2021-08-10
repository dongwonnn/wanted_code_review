import React from 'react'
import Routes from './Routes'

function App() {
  return (
    // 얘네 다 index.로 보내. App에서 이런거 관리 ㄴㄴ
    <div className={styles.wrapper}>
      <Routes />
    </div>
  )
}

const styles = {
  wrapper: 'relative max-w-screen-sm p-4 mx-auto'
}

export default App
