import { Link } from "react-router-dom"

function StudentDashboard() {
    return (
        <div style={{ padding: '40px', minHeight: '100vh' }}>
            <div className="scanline"></div>
            <div className="glass-panel">
                <h1 style={{ marginBottom: '20px' }}>Student Terminal</h1>
                <p style={{ color: '#aaa', marginBottom: '30px', letterSpacing: '1px' }}>
                    Welcome, Operative. Your learning modules are being synchronized.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '0.9rem' }}>Active Courses</h3>
                        <p style={{ fontSize: '2rem', marginTop: '10px' }}>00</p>
                    </div>
                    <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '0.9rem' }}>Assignments Due</h3>
                        <p style={{ fontSize: '2rem', marginTop: '10px' }}>00</p>
                    </div>
                    <div className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '0.9rem' }}>Overall Rank</h3>
                        <p style={{ fontSize: '2rem', marginTop: '10px' }}>N/A</p>
                    </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <button style={{ marginRight: '20px' }}>Launch Modules</button>
                    <Link to="/h">
                        <button style={{ background: 'transparent', border: '1px solid #444', color: '#888' }}>Terminate Session</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StudentDashboard
