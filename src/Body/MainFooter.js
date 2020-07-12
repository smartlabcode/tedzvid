import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

function Footer(props) { 
    return (
        <React.Fragment>
            <footer className="mainfooter">
                <Row>
                    <Col className="text-left">
                        <Link to={props.prev} className="text-white">
                            <img style={{width: "30px", float: "right", marginTop: "0"}} className="logoUrl" src={process.env.PUBLIC_URL + '/assets/svg/ic_arrow_drop_down_circle_24px.svg'} /> 
                        </Link>
                        </Col>
                        <Col className="text-right">
                        <Link to={props.next} className="text-white">
                            <img className="btnRight" src={process.env.PUBLIC_URL + '/assets/svg/ic_arrow_drop_down_circle_24px.svg'} />
                        </Link>
                    </Col>
                </Row>
            </footer>
            <footer className="mobilefooter">
                <Row className="mobileNavButtons">
                    <div>
                        <Link to={props.prev} className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                        <path id="ic_arrow_drop_down_circle_24px" d="M15,0A15,15,0,1,0,30,15,15.005,15.005,0,0,0,15,0Zm0,18L9,12H21Z" transform="translate(30) rotate(90)" fill="#FCE3AA"/>
                        </svg>
                        </Link>
                    </div>
                    <div style={{marginLeft: "10px", marginRight: "10px"}}>
                        <Link to="/lekcije" className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                        <g id="Group_59" data-name="Group 59" transform="translate(-192 -686)">
                            <circle id="Ellipse_2" data-name="Ellipse 2" cx="15" cy="15" r="15" transform="translate(192 686)" fill="#fce3aa"/>
                            <path id="ic_home_24px" d="M7.648,15V10.766h2.824V15H14V9.354h2.118L9.06,3,2,9.354H4.118V15Z" transform="translate(197.507 691.281)" fill="#8a552b"/>
                        </g>
                        </svg>
                        </Link>
                    </div>
                    <div>
                        <Link to={props.next} className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                        <path id="ic_arrow_drop_down_circle_24px" d="M15,0A15,15,0,1,0,30,15,15.005,15.005,0,0,0,15,0Zm0,18L9,12H21Z" transform="translate(0 30) rotate(-90)" fill="#fce3aa"/>
                        </svg>
                        </Link>
                    </div>
                </Row>
            </footer>
    </React.Fragment>
    );
}

export default Footer;