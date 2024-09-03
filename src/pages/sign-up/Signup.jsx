import { Card, Form } from "react-bootstrap"
import "./signup.css"
import Header from "../../components/header/Header"

const Signup = () => {
    return (
        <>
            <Card bg="light" style={{ width: '23rem', marginLeft: "auto", marginRight: "auto"}}>
                <Card.Body>
                    <Form className="signup">
                        <Card.Title>Sign up</Card.Title>
                        <label for="name" className="formcontrol">Name:</label>
                        <input type="text" class="form-control"></input>
                        <label for="lastname" className="formcontrol">Last Name:</label>
                        <input type="text" class="form-control"></input>
                        <label for="email" className="formcontrol">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"></input>
                        <label for="lastname" className="formcontrol">Phone Number</label>
                        <input type="number" class="form-control"></input>      
                        <label for="pwd" className="formcontrol">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"></input>
                        <label for="pwd" className="formcontrol">Confirm Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Confirm password" name="pwd"></input>
                        <button type="submit" className="button">Sign-Up</button>
                    </Form>
                </Card.Body>
            </Card>
        </>
            
    )
}

export default Signup