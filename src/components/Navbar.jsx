import './css/navbar.css';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="logo">QuizMaster</div>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="signup">Sign Up</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>© 2024 QuizMaster. All rights reserved.</p>
            </footer> 
        </>
    )
}

export default Navbar;