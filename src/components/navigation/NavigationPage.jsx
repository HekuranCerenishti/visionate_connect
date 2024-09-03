import { Container, Nav, Navbar } from "react-bootstrap"
import "./navigationpage.css"

export const NavigationPage = () => {
    
    return ( 
        <>
            <Navbar className="navbar" data-bs-theme="dark">
                <Container>
                    <Nav defaultActiveKey="/home">
                        <Nav.Item >
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/alljobs">All Jobs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}