import { Link } from "react-router-dom/cjs/react-router-dom";


export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navtitle">Le Blog</Link>
            <ul>
                <li>
                    <Link to="/blogs" className="navtext">Blogs</Link>
                </li>     
                <li>   
                    <Link to="/pictures" className="navtext">Pictures</Link>
                </li>
                <li>   
                    <Link to="/recipes" className="navtext">Recipes</Link>
                </li>
                <li>
                    <Link to="/about" className="navtext">About</Link>
                </li>
            </ul>
    </nav>
    )
}