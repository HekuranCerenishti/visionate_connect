import { useNavigate } from "react-router-dom"
import "./home.css"
import { Container, Row, Col, Image,} from 'react-bootstrap';


const Home = () => {
    const navigate = useNavigate();
    return (
        <Container fluid style={{ height: '100vh' }}>
            <Row style={{ height: '50%',backgroundColor:"#ededed" }} >
                <Col style={{ width: '23rem', marginLeft: "20%",paddingTop:"35px", marginRight: "auto"}}>
                    <div>
                            
                        <h1 style={{color:"#97c5d3",fontSize:"20px"}} className="cardtitle">Visionate Connect</h1>
                        <p style={{fontSize:"45px", fontFamily:"fantasy",color:"black"}} className="mb-2 text-muted">Land your dream job</p>
                        <p style={{fontSize:"20px"}}>
                        There's a position that's perfect for you.</p>
                        <button type="submit" onClick={()=>navigate("/alljobs")} className="searchnow">Search now</button>
                    </div>
                
            
                </Col>
                <Col xs={6} md={4}>
                    <Image style={{height:"80%",paddingTop:"40px"}} src="/images/findjob-removebg-preview.png" />
                </Col>
            </Row>
                <Row style={{ height: '50%',backgroundColor:"rgb(212 226 221)" }} >
                <Col xs={6} md={4}>
                    <Image style={{height:"80%",paddingLeft:"100px",paddingTop:"30px"}} src="/images/job.png" />
                </Col>
                <Col style={{ width: '23rem', marginLeft: "20%",paddingTop:"40px",  marginRight: "auto"}}>
                        <div>
                            <h1 style={{color:"#97c5d3",fontSize:"20px"}} className="cardtitle">Visionate Connect</h1>
                            <p style={{fontSize:"45px", fontFamily:"fantasy",color:"black"}} className="mb-2 text-muted">Looking for a new home?</p>
                            <p>
                            Make the process simple with our service.     </p>
                            <button type="submit" className="searchnow">Browse now</button>
                        </div>
                </Col>
               
                </Row>  
                <Row style={{ height: '50%',backgroundColor:"rgb(238 237 222)" }} >
                <Col style={{ width: '23rem', marginLeft: "20%",paddingTop:"10px",  marginRight: "auto"}}>
                        <div>
                            <h1 style={{color:"#97c5d3",fontSize:"20px"}} className="cardtitle">Visionate Connect</h1>
                            <p style={{fontSize:"45px", fontFamily:"fantasy",color:"black"}} className="mb-2 text-muted">Looking for the perfect candidate?</p>
                            <p>
                            Post the job now!     </p>
                            <button type="submit" className="searchnow">Post now</button>
                        </div>
                </Col>
                <Col xs={6} md={4}>
                    <Image style={{height:"80%",paddingTop:"25px"}}  src="/images/postjob.png" />
                </Col>
                </Row>     
        </Container>
      );
    };
    
export default Home