import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import data from "../Data/lessons.json";
import { IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";

function HomeFirst(props) {
  // let lekcije = data['lekcije'].slice(props.start,props.stop)
  let lekcije = data["lekcije"].reduce((acc, curr) => acc.concat(curr), []);

  return (
    <React.Fragment>
      {lekcije.map((lekcija, index) => {
        let number = props.start + index + 1;

        function dugmeTabela() {
          if (index == 0) {
            return (
              <Link
                to={"/lekcija" + number + "#tabela"}
                style={{ color: "inherit" }}
              >
                <button className="pristupiBtn">
                  Tabela <IoIosArrowForward />
                </button>
              </Link>
            );
          }
        }
        function dugmeZnakovi() {
          if (index == 0) {
            return (
              <Link
                to={"/lekcija" + number + "#znakovi"}
                style={{ color: "inherit" }}
              >
                <button className="pristupiBtn">
                  Znakovi <IoIosArrowForward />
                </button>
              </Link>
            );
          }
        }
        return (
          <Row className="">
            <Col>
              <Card>
                <Card.Body>
                  <Badge style={{ paddingLeft: "0" }} className="imelekcije">
                    {number}
                  </Badge>
                  <div className="alignMobile">
                    <div className="tabletText">
                      <Card.Title>{lekcija.title} </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {lekcija.subtitle}
                      </Card.Subtitle>
                      <div className="sectonRight">
                        <IconContext.Provider value={{ color: "#92623C" }}>
                          {dugmeTabela()}
                          {dugmeZnakovi()}
                          <Link
                            to={"/lekcija" + number + "#vjezba"}
                            style={{ color: "inherit" }}
                          >
                            <button className="pristupiBtn">
                              Vježba <IoIosArrowForward />
                            </button>
                          </Link>
                          <Link
                            to={"/lekcija" + number + "#lekcija"}
                            style={{ color: "inherit" }}
                          >
                            <button className="pristupiBtn">
                              Lekcija <IoIosArrowForward />
                            </button>
                          </Link>
                        </IconContext.Provider>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* <Col>
                    <Link to={"/lekcija"+(number+1)} style={{ color: 'inherit' }}><Card>
                        <Card.Body>
                            <Card.Title>{lekcija[1].title} <Badge className="imelekcije" variant="light">Lekcija {number+1}</Badge> </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{lekcija[1].subtitle}</Card.Subtitle>
                        </Card.Body>
                    </Card></Link>
                </Col> */}
          </Row>
        );
      })}
    </React.Fragment>
  );
}

export default HomeFirst;
