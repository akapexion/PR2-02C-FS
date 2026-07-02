import React from 'react'
import Form from './screens/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Table from './screens/Table'
import Upload from './screens/Upload'
import Register from './screens/Register'
import Login from './screens/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/add" element={<Form />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
