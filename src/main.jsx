import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './Login.jsx'
import DashApp from './dashboard.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<App />} />
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashApp />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)