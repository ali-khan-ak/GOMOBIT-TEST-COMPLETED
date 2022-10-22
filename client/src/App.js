import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Auth/auth'
import Registration from './pages/Registration/registration'
import Adduser from './pages/addUser/addUser'
import Viewuser from './pages/View/viewUser'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<Registration />} />
                <Route path="/adduser" element={<Adduser />} />
                <Route path="/viewuser" element={<Viewuser />} />
            </Routes>
        </Router>
    )
}
