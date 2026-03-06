import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Reg from "./reg"
import Home from "./home"
import StudentDashboard from "./StudentDashboard"
import TeacherDashboard from "./TeacherDashboard"

function App() {
  return (
    <BrowserRouter>
      <div className="scanline"></div>
      <Routes>
        <Route path="/" element={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', textAlign: 'center' }}>
            <div className="glass-panel" style={{ maxWidth: '500px' }}>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>NEURAL NET</h1>
              <p style={{ color: '#888', marginBottom: '30px', letterSpacing: '4px' }}>EDUCATIONAL INTERFACE v1.0</p>

              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Link to="/reg">
                  <button>Registration</button>
                </Link>
                <Link to="/h">
                  <button style={{ background: 'transparent', border: '1px solid #fff' }}>Access Point</button>
                </Link>
              </div>
            </div>
          </div>
        } />
        <Route path="/reg" element={<Reg />} />
        <Route path="/h" element={<Home />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App