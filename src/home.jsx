import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleLogin = async () => {
        try {
            const res = await axios.post("https://ttbdemoh33-1.onrender.com/login", credentials)
            const user = res.data;
            alert(`ACCESS GRANTED: WELCOME ${user.username}`);

            if (user.role === "TEACHER") {
                navigate("/teacher-dashboard")
            } else {
                navigate("/student-dashboard")
            }
        } catch (err) {
            alert("ACCESS DENIED: INVALID CREDENTIALS")
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
            <div className="scanline"></div>
            <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '30px', fontSize: '1.5rem' }}>Access Point</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <input name="username" onChange={handleChange} placeholder="IDENTIFIER" />
                    <input name="password" type="password" onChange={handleChange} placeholder="ACCESS_CODE" />

                    <button onClick={handleLogin} style={{ marginTop: '10px' }}>Initiate Login</button>

                    <div style={{ marginTop: '20px', fontSize: '0.8rem' }}>
                        <Link to="/reg" style={{ color: '#aaa', textDecoration: 'none', letterSpacing: '2px' }}>
                            {">"} INITIALIZE NEW PERSONNEL
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home