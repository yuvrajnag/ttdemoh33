import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Reg() {
    const navigate = useNavigate();
    const [data, setdata] = useState({
        username: "",
        email: "",
        password: "",
        role: "STUDENT"
    })

    const changeName = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const submit = async () => {
        try {
            const res = await axios.post(
                "https://ttbdemoh33-1.onrender.com/register",
                data
            )
            alert("REGISTRATION COMPLETE: " + res.data)
            navigate("/h")
        }
        catch (err) {
            alert("ERROR: " + (err.response?.data || "SYSTEM FAILURE"))
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
            <div className="scanline"></div>
            <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '30px', fontSize: '1.5rem' }}>Personnel Initialization</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <input onChange={changeName} name="username" placeholder="IDENTIFIER" />
                    <input onChange={changeName} name="email" placeholder="COMM_LINK (EMAIL)" />
                    <input onChange={changeName} name="password" type="password" placeholder="ACCESS_CODE" />

                    <select name="role" onChange={changeName} value={data.role} style={{ width: '100%' }}>
                        <option value="STUDENT">RANK: STUDENT</option>
                        <option value="TEACHER">RANK: TEACHER</option>
                    </select>

                    <button onClick={submit} style={{ marginTop: '10px' }}>Authorize Registration</button>

                    <div style={{ marginTop: '20px', fontSize: '0.8rem' }}>
                        <Link to="/h" style={{ color: '#aaa', textDecoration: 'none', letterSpacing: '2px' }}>
                            {">"} RETURN TO ACCESS POINT
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reg