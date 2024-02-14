import { Link } from "react-router-dom/cjs/react-router-dom";


export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navtitle">Alexis's Travel Blog</Link>
            <ul>
                <li>
                    <Link to="/posts" className="navtext">Posts</Link>
                </li>     
                <li>   
                    <Link to="/pictures" className="navtext">Pictures</Link>
                </li>
                <li>
                    <Link to="/about" className="navtext">About</Link>
                </li>
            </ul>
    </nav>
    )
}