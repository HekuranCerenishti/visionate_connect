import "./homeSection.css"
import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

const HomeSection = ({ index, sectionProps }) => {
    const navigate = useNavigate();
    const isEven = (index) => { 
        debugger
        return ((index) % 2) == 0;}
    return (
        <>
        {

            isEven(index) ? <Row style={{ height: '50%',backgroundColor:sectionProps.backgroundColor }} >
            <Col style={{ width: '23rem', marginLeft: "20%",paddingTop:sectionProps.paddingTop, marginRight: "auto"}}>
                <div>
                
                    <h1 style={{color:"#97c5d3",fontSize:"20px"}} className="cardtitle">Visionate Connect</h1>
                    <p style={{fontSize:"45px", fontFamily:"fantasy",color:"black"}} className="mb-2 text-muted">{sectionProps.paragraphMessages.p1}</p>
                    <p style={{fontSize:"20px"}}>{sectionProps.paragraphMessages.p2}</p>
                    <button type="submit" onClick={()=>sectionProps.action()} className="searchnow">{sectionProps.button}</button>
                </div>
            
        
            </Col>
            <Col xs={6} md={4}>
                <Image style={{height:"80%", paddingLeft:sectionProps.image.paddingLeft, paddingTop:sectionProps.image.paddingTop}} src={sectionProps.image.src} />
            </Col>
        </Row> : <Row style={{ height: '50%',backgroundColor:sectionProps.backgroundColor }} >
            
        <Col xs={6} md={4}>
                <Image style={{height:"80%", paddingLeft:sectionProps.image.paddingLeft, paddingTop:sectionProps.image.paddingTop}} src={sectionProps.image.src} />
            </Col>
            <Col style={{ width: '23rem', marginLeft: "20%",paddingTop:sectionProps.paddingTop, marginRight: "auto"}}>
                <div>
                
                    <h1 style={{color:"#97c5d3",fontSize:"20px"}} className="cardtitle">Visionate Connect</h1>
                    <p style={{fontSize:"45px", fontFamily:"fantasy",color:"black"}} className="mb-2 text-muted">{sectionProps.paragraphMessages.p1}</p>
                    <p style={{fontSize:"20px"}}>{sectionProps.paragraphMessages.p2}</p>
                    <button type="submit" onClick={()=>sectionProps.action()} className="searchnow">{sectionProps.button}</button>
                </div>
            
        
            </Col>
        </Row> 
        }
        
        </>
    )
}

export default HomeSection