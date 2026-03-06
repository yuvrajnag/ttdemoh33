import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

function Reg() {
    const [data, setdata] = useState(
        {
            username: "",
            email: "",
            password: ""
        }
    )
    const changeName = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const submit = async () => {
        try {
            //  const res=await axios.post("http://localhost:8080/reg",data)

            // IMPORTANT: Replace this URL with your ACTUAL deployed Render backend URL once it's live!
            // Example: "https://your-backend-app-name.onrender.com/register"
            const res = await axios.post(
                "https://ttbdemoh33-1.onrender.com/register",
                data
            )
            alert(res.data)
        }
        catch (xyz) {
            //  alert(xyz.response.data)
            alert(xyz.response?.data || "Error")
        }
    }
    return (
        <>
            <h1>Register</h1>
            <input onChange={changeName} name="username" placeholder="enter username" />
            <input onChange={changeName} name="email" placeholder="enter email" />
            <input onChange={changeName} name="password" placeholder="enter password" />
            <button onClick={submit}>register</button>
            <br />
            <Link to="/h">Go to Home</Link>
        </>
    )
}
export default Reg