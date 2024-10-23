
import { Container } from 'react-bootstrap';
import HomeSection from "../HomeSections/HomeSection";
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {

const navigate = useNavigate();
    const sections = [
        {
            backgroundColor: "#ededed",
            paragraphMessages: {
                p1: "Land your dream job",
                p2: "There's a position that's perfect for you."
            },
            button: "Search now", 
            paddingTop: "35px",
            image: {
                paddingTop: "40px" ,
                src: 'images/findjob-removebg-preview.png',
            },
            action: () => navigate("/alljobs")
        },
        {
            backgroundColor:"rgb(212 226 221)",
            paragraphMessages: {
                p1: "Looking for a new home?",
                p2: "Make the process simple with our service."
            },
            button: "Browse now",
            paddingTop: "10px",
            image: {
                paddingTop: "30px" ,
                paddingLeft: "100px",
                src: 'images/job.png',
            },
            action: () => alert("TODO HOME")
        },
        {
            backgroundColor:"rgb(238 237 222)",
            paragraphMessages: {
                p1: "Looking for the perfect candidate?",
                p2: "Post the job now!"
            },
            button: "Post now",
            paddingTop: "10px",
            image: {
                paddingTop: "25px" ,
                src: 'images/postjob.png'
            },
            action: () => alert("TODO POST")
        },
    ]
    return (   
         <Container fluid style={{ height: '100vh' }}>
            {
                sections.map((element, index) => {
                    return <HomeSection key={index} index={index} sectionProps= {element} ></HomeSection>
                })
            }
        </Container>
    );
}  
export default Home