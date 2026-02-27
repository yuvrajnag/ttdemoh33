import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <h1>Welcome Home</h1>
            <Link to="/reg">Go to Register</Link>
        </>
    )
}
export default Home