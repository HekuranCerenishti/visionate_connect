import { Form, Nav, Navbar } from "react-bootstrap"
import "./header.css"
import { useNavigate } from "react-router-dom"
const Header = () => {
    const navigate = useNavigate();
    return (
        <Form>
            <div className="header">
                <div className="headerContainer">
                <Nav.Link style={{paddingLeft:"30px",fontWeight:"600",fontSize:"20px",fontFamily:"cursive",color:"rgb(106 164 144)"}} href="/">Visionate Connection</Nav.Link>                    
                    <div className="buttons">
                        <button onClick={()=>navigate("/login")} className="login">Log In</button>
                        <button onClick={()=>navigate("/signup")} className="sign-up">Sign Up</button>
                    </div>
                </div>
            </div>
        </Form>
    )
}

export default Header