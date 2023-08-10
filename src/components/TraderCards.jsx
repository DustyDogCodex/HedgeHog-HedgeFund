import { Col, Container, Row, Card } from "react-bootstrap"
import hedgehog1 from "../Images/hedgehog1.jpg"
import hedgehog2 from "../Images/hedgehog2.jpg"
import hedgehog3 from "../Images/hedgehog3.jpg"

//using card templates from react-bootstrap docs
function TraderCards(){
    return(
        <section className="p-5">
            <Container>
                <h2
                    className="mb-5 text-center"
                >
                    Meet Our Traders
                </h2>

                <Row 
                    className="text-center" 
                    lg={3} 
                    md={2}
                    sm={1} 
                    xs={1}
                >
                    <Col >
                        <Card>
                            <Card.Img 
                                variant="top" 
                                src={hedgehog1} 
                                className="images"
                            />
                            <Card.Body className="bg-primary">
                                <Card.Text className="text-light">
                                    What rodent helps reduce your risk when trading livestock futures? A hedgehog.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>

                    <Col >
                        <Card>
                            <Card.Img 
                                variant="top" 
                                src={hedgehog2}
                                className="images"
                            />
                            <Card.Body className="bg-primary">
                                <Card.Text className="text-light">
                                    After studying at HedgeHogFord, Mr. Prickles now utilises his expertise and knowledge at HHF.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>

                    <Col >
                        <Card>
                            <Card.Img 
                                variant="top" 
                                src={hedgehog3}
                                className="images"
                            />
                            <Card.Body className="bg-primary">
                                <Card.Text className="text-light">
                                    With 30 years of experience, Mr. Butterball is a hedgendary figure in the industry.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TraderCards