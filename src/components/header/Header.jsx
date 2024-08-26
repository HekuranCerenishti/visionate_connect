import "./header.css"
 const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="logo">Visionate Connect</div>
                <div className="tabs">
                    <div className="home">Home</div>
                </div>
                <div className="buttons">
                    <button className="login">Log In</button>
                    <button className="signup">Sign Up</button>
                </div>
            </div>
        </div>
    )
 }

 export default Header