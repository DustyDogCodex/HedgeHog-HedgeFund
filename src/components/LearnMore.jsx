import { Col, Container, Row } from "react-bootstrap";

function LearnMore(){
    return(
        <>
        <section className="p-5 bg-dark">
            <Container>
                <Row className="align-items-center justify-content-between" >
                    <Col>
                        <img style={{width:'700px' ,marginLeft:'40px'}} src="../images/hedge-fund.jpg" alt="hedge-fundy-stuff" />
                    </Col>
                    <Col>
                        <h2 className="text-warning text-center" >Beat the market consistently</h2>
                        <p className="text-light text-center lead">Using our propiertary hedgefundy math engineering equations and complex neural networking AI machine learning algorithms, get the edge you need in the current market. </p>
                        <p className="text-light text-center lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto laudantium ipsam quia, voluptatibus inventore voluptatum veniam atque labore eos accusantium aspernatur dolorem velit, totam quam.</p>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="p-5 bg-light">
            <Container>
                <Row className="align-items-center justify-content-between" lg={2} md={1} sm={1} xs={1}>
                    <Col>
                        <h2 className="text-primary text-center" >Mutliple asset types to navigate any kind of market conditions</h2>
                        <p className="text-dark text-center lead">We offer a wide variety of funds to satisfy the needs of our most important stakeholder: you. As a global asset manager and fiduciary to our clients, our purpose has always been to continue finding new ways to help more and more people experience financial well-being.
                        </p>
                    </Col>
                    <Col>
                        <img style={{height:'80%',width:'80%',marginLeft:'40px'}} src="../images/assets.jpg" alt="types of assets" />
                    </Col>
                </Row>
            </Container>
        </section>

        </>
    )
}

export default LearnMore