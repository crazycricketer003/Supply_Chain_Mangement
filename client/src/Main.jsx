import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import Dashboard from './Dashboard.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <div className='bg-gradient-to-tr from-gray-700 via-gray-200 to-black'>
                <Routes>
                    <Route index element={<App />} />
                    <Route path='/auth/login' element={<Login />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
                <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        © 2024 Cognichain. All rights reserved.
                    </p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <a className="text-xs hover:underline underline-offset-4" href="#" rel="ugc">
                            Terms of Service
                        </a><a className="text-xs hover:underline underline-offset-4" href="#" rel="ugc">
                            Privacy
                        </a>
                    </nav>
                </footer>
            </div>
        </Router>
    </React.StrictMode>,
)