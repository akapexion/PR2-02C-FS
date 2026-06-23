import React from 'react'
import Form from './screens/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Table from './screens/Table'
import Upload from './screens/Upload'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/add" element={<Form />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
