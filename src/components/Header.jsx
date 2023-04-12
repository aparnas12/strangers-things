import { NavLink, useNavigate } from "react-router-dom";
import './Header.css';

const Header = ({ setCurrentUser, setToken, setIsLoggedIn, isLoggedIn }) => {
    const navigate = useNavigate();

    return (
        <>
            <header>
                <h1> Strangers Things</h1>
                <nav className="nav-bar">
                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink>
                    <NavLink to="/AllPosts" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Posts</NavLink>
                    <NavLink to="/Profile" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Profile</NavLink>
                    {/* <NavLink to="/LoginPage" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Log Out</NavLink> */}
                    {isLoggedIn ?
                        <button
                            onClick={() => {
                                setIsLoggedIn(false);
                                setCurrentUser('');
                                setToken('');
                                localStorage.removeItem('token');
                                navigate('/Home');
                            }}
                        > Logout</button>
                        :
                        <button
                            onClick={() => {
                                navigate('/LoginPage');
                            }}
                        > Log In</button>
                    }




                </nav>

            </header>

        </>
    );

}
export default Header;
















{/* <div classname = 'nav-bar'>
                <nav id ="sidebar">
                <NavLink to ="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>Posts</NavLink>
                <NavLink to ="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>Profile</NavLink>
                </nav>
            </div> */}