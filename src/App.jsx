import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './MainPage'
import PdfPage from './PdfPage'

function App() {
  const [page, setPage] = useState(undefined)

  {
    return !page ? <MainPage /> : <PdfPage />
  }
}

export default App
