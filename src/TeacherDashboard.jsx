import { Link } from "react-router-dom"

function TeacherDashboard() {
    return (
        <div style={{ padding: '40px', minHeight: '100vh' }}>
            <div className="scanline"></div>
            <div className="glass-panel">
                <h1 style={{ marginBottom: '20px' }}>Command Center: Educator</h1>
                <p style={{ color: '#aaa', marginBottom: '30px', letterSpacing: '1px' }}>
                    Accessing centralized educational data. Systems nominal.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                    <div className="glass-panel" style={{ padding: '20px' }}>
                        <h3 style={{ fontSize: '0.9rem', marginBottom: '15px' }}>Personnel Overview</h3>
                        <div style={{ fontSize: '0.8rem', color: '#888' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <span>TOTAL STUDENTS:</span>
                                <span>0</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>ACTIVE NOW:</span>
                                <span style={{ color: '#fff' }}>0</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel" style={{ padding: '20px' }}>
                        <h3 style={{ fontSize: '0.9rem', marginBottom: '15px' }}>System Logs</h3>
                        <div style={{ fontSize: '0.7rem', color: '#555', fontFamily: 'monospace' }}>
                            {">"} Grading Module: Online<br />
                            {">"} Virtual Lab: Syncing...<br />
                            {">"} Attendance Sweep: Complete
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <button style={{ marginRight: '20px' }}>Initialize Broadcast</button>
                    <button style={{ marginRight: '20px' }}>Generate Report</button>
                    <Link to="/h">
                        <button style={{ background: 'transparent', border: '1px solid #444', color: '#888' }}>Close Terminal</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TeacherDashboard
