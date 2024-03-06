import { useState } from 'react'
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
