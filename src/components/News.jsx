import { Col, Container, Row, Card } from "react-bootstrap"
import handshake from "../Images/handshake.jpg"
import nuclearfusion from "../Images/nuclear-fusion.jpg"
import medicine from "../Images/medicine.jpg"

function News(){
    return (
        <section 
            className="p-5 d-flex flex-column align-items-center justify-content-center" 
            style={{margin:'50px 50px 50px 50px'}}
        >
            <h2 
                className="text-center mb-4"
            >
                News & Insights
            </h2>

            <Container className="d-flex flex-column align-items-center justify-content-between">
                <Row 
                    lg={3} 
                    md={2} 
                    sm={1} 
                    xs={1}
                >
                    {/* News Cards */}
                    <Col>
                        <Card style={{ width: '18rem', margin:'20px' }}>
                            <Card.Img 
                                variant="top" 
                                src={handshake} 
                            />
                            <Card.Body>
                                <Card.Title 
                                    className="text-center"
                                >
                                    HHF solves Middle-East
                                </Card.Title>
                                <Card.Text 
                                    className="text-center"
                                >
                                    After years of multilateral conversations, HedgeHog Hedge Fund was finally able to bring all parties to cease hostilities and usher in a new yea of peace for all countries in the Middle-East.
                                </Card.Text>
                                <Card.Text
                                    className="text-center"
                                >
                                    Last updated 3 mins ago
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem', margin:'20px' }}>
                            <Card.Img 
                                variant="top" 
                                src={nuclearfusion} 
                            />
                            <Card.Body>
                                <Card.Title 
                                    className="text-center"
                                >
                                    HHF makes nuclear fusion a reality
                                </Card.Title>
                                <Card.Text 
                                    className="text-center"
                                >
                                    The International Thermonuclear Experimental Reactor (ITER) project was able to achieve sustained nuclear fusion reactions, decades ahead of most people's expectations.
                                </Card.Text>
                                <Card.Text
                                    className="text-center"
                                >
                                    Last updated 8 mins ago
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem', margin:'20px' }}>
                            <Card.Img 
                                variant="top" 
                                src={medicine} 
                            />
                            <Card.Body>
                                <Card.Title 
                                    className="text-center"
                                >
                                    Cancer solved!
                                </Card.Title>
                                <Card.Text 
                                    className="text-center"
                                >
                                   Big Pharma, a wholly owned subsidiary of HHF, brought to market Panacea &#169; this week, finally getting rid of cancer and saving billions of lives.
                                </Card.Text>
                                <Card.Text
                                    className="text-center"
                                >
                                    Last updated 20 mins ago
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default News