import React from 'react';
import { Link } from 'react-router-dom';
// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

function LekcijaMenu(props) {
    return(
        <React.Fragment>
                <div className="topNav">
                        <div className="logoNavBox">
                        <Link to="/">
                            <img className="logoUrl" src={process.env.PUBLIC_URL + '/assets/svg/logoUrl.png'} /> 
                        </Link>    
                    </div>
                    <div className="nav">
                        <ul>
                            <Link to={"/lekcije"}>
                                <img style={{marginTop: "11px",}} src={process.env.PUBLIC_URL + '/assets/svg/ic_trending_flat_24px.png'} />
                                <li style={{color: "black"}}>NAZAD NA LEKCIJE</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="topMobileNav">
                    <img className="hamburger" src={process.env.PUBLIC_URL + '/assets/svg/hamburger.svg'} /> 
                    <Link to="/">
                        <img className="mobileLogo" src={process.env.PUBLIC_URL + '/assets/svg/mobileLogo.png'} /> 
                    </Link>
                    <div>
                        <Link to={"/lekcije"}>
                            <svg className="mobNavSearch" xmlns="http://www.w3.org/2000/svg" width="17.49" height="17.49" viewBox="0 0 17.49 17.49">
                                <path id="ic_search_24px" d="M15.5,14h-.79l-.28-.27a6.51,6.51,0,1,0-.7.7l.27.28v.79l5,4.99L20.49,19Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z" transform="translate(-3 -3)" fill="#fce3aa"/>
                            </svg>
                        </Link>
                    </div>

                    <div className="fullMenu" style={{display: "none"}}>
                        <h3 className="closeBTN">X</h3>
                        <center>
                        <ul>
                            <li className="selectedBtn">NASLOVNA</li>
                            <li>IMPRESUM</li>
                            <li>KONTAKT</li>
                            <li>LEKCIJE</li>
                        </ul>
                        </center>
                    </div>
                </div>
            <Container className="height50px"> 
                <div className="lekcijaTop">
                    <h2 style={{float: "left", marginRight: "20px"}} className="text-uppercase">{props.broj}</h2>
                    <h2 style={{float: "left"}} className="text-uppercase">{props.naziv}</h2>
                    <img style={{float: "right", width: "12px", marginTop: "15px"}} className="logoUrl" src={process.env.PUBLIC_URL + '/assets/svg/Polygon 3.svg'} /> 
                </div>	
            </Container>
        </React.Fragment>
    )
}

export default LekcijaMenu;
