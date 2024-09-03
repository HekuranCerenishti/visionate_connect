import { Card, Form } from "react-bootstrap"
import "./login.css"
import Header from "../../components/header/Header"
const Login = () => {
    return (
        <>
            <Card className="card" bg="light" style={{ width: '23rem', marginLeft: "auto", marginRight: "auto"}}>
                <Card.Body>
                    <Form className="signup">
                        <Card.Title>Log in</Card.Title>
                        <label for="email" className="formcontrol">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"></input>
                        <label for="pwd" className="formcontrol">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"></input>
                        <button type="submit" className="button">Log-In</button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default Login