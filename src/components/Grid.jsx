import { Col, Container, Row, Card } from "react-bootstrap"

//using card templates from react-bootstrap docs
function Grid(){
    return(
        <section className="p-5">
            <Container>
                <Row className="text-center" lg={3} sm={1} xs={1}>
                    <Col >
                        <Card>
                            <Card.Img variant="top" src="../images/hedgehog1.jpg" className="images"/>
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
                            <Card.Img variant="top" src="../images/hedgehog2.jpg" className="images"/>
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
                            <Card.Img variant="top" src="../images/hedgehog3.jpg" className="images"/>
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

export default Grid