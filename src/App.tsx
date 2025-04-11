import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from '@/pages/Landing'
import NotFound from '@/pages/NotFound'
import AuthLayout from '@/layouts/AuthLayout'
import { Login } from '@/pages/Login'
import { Signup } from '@/pages/Signup'
import AppLayout from '@/layouts/AppLayout'
import Dashboard from '@/pages/Dashboard/Dashboard'
import Projects from '@/pages/Projects/Projects'
import Project from '@/pages/Project/Project'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/app" element={<AppLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectId" element={<Project />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
