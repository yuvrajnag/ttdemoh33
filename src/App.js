import { BrowserRouter, Routes, Route } from "react-router-dom"
import Reg from "./reg"
import Home from "./home"
function App() {
  return (
    <>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Iam App</h1>
        <p>Welcome! Please navigate using the buttons below.</p>
        <div style={{ marginTop: '20px' }}>
          <a href="/reg" style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}>Go to Registration</a>
          <a href="/h" style={{
            padding: '10px 20px',
            backgroundColor: '#f5a623',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}>Go to Home</a>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/reg" element={<Reg />} />
          <Route path="/h" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App